<?php
namespace App\Service\Datatable;
use Doctrine\ORM\EntityManagerInterface;

class DatatableService
{
    private $em;
    private $cnx;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->cnx = $this->em->getConnection();
    }

    /**
     * Retrieves paginated and filtered data from a database using a provided SQL query
     *
     * @param string $query
     * @param array $data
     * @return void
     */
    public function getResult($query, $data)
    {
        /*
            Example $query:
            $query = "(
                SELECT
                    client.id AS id,
                    client.name AS client_name,
                    client.phone AS client_phone,
                    book.name AS title
                FROM
                    client
                LEFT JOIN book on book.author_id = client.id
            )";

            Example $data:
            $data = [
                "limit" => 20,
                "page" => 1,
                "key" => "key to search",
                "order_by" => "client_name",
                "order" => "DESC"
            ];
        */
        list(
            $sql,
            $sqlCount,
            $sqlCountAll,
            $params
        ) = $this->getSql($query, $data);

        $datas = $this->cnx->fetchAllAssociative($sql, $params);
        $totalFiltered = $this->cnx->fetchAllAssociative($sqlCount, $params)[0]['total'];
        $total = $this->cnx->fetchAllAssociative($sqlCountAll, $params)[0]['total'];

        $page = 1;
        $size = 10;
        if (isset($data['page'])) {
            $page = $data['page'];
        }
        if (isset($data['size'])) {
            $size = $data['size'];
        }
        $result = [
            'datas' => $datas,
            'page' => $page,
            'size' => $size,
            'totalFiltered' => $totalFiltered,
            'total' => $total,
        ];

        return $result;
    }

    /**
     * Get the query and parameters for datatable
     *
     * @param string $query Raw query
     * @param array $data
     * @return void
     */
    public function getSql($query, $data)
    {
        $alias = $this->generateAlias();
        
        list($limit, $page, $orderBy, $order, $key, $searchFields, $whereArray) = $this->prepareQueryParams($data);

        $orderQuery = $this->getOrderQuery($orderBy, $order);
       
        $limitQuery = $this->getLimitQuery($page, $limit);

        $sql = '';
        $sql = sprintf("SELECT * FROM %s as %s", $query, $alias);
        
        list(
            $params,
            $searchQuery
        ) = $this->getSearchQuery($key, $searchFields, $whereArray);

        $sql .= $searchQuery;
        $sql .= $orderQuery;
        $sql .= $limitQuery;

        $sqlCount = sprintf("SELECT COUNT(*) AS total FROM %s as %s", $query, $alias);

        $sqlCountAll = $sqlCount;
        $sqlCount .= $searchQuery;

        return [$sql, $sqlCount, $sqlCountAll, $params];
    }

    /**
     * Prepare query parameters based on request parameters
     *
     * @param array $data
     * @return array
     */
    public function prepareQueryParams($data)
    {
        $size = 10;
        $page = 1;
        $orderBy = null;
        $order = "ASC";
        $key = null;
        $searchFields = [];
        $whereArray = [];

        if (isset($data['size']) && $data['size']) {
            $size = $data['size'];
        }

        if (isset($data['page']) && $data['page']) {
            $page = $data['page'];
        }

        if (isset($data['orderBy']) && $data['orderBy']) {
            $orderBy = $data["orderBy"];
        }

        if (isset($data['order']) && $data['order']) {
            $order = $data["order"];
        }

        if (isset($data['search_fields']) && $data['search_fields']) {
            $searchFields = $data['search_fields'];
        }
        
        if (isset($data['key']) && $data['key']) {
            $key = $data['key'];
        }

        if (isset($data['where_array']) && $data['where_array']) {
            $whereArray = $data['where_array'];
        }

        return [$size, $page, $orderBy, $order, $key, $searchFields, $whereArray];
    }

    public function generateAlias() {
        return "base_table_alias";
    }

    private function getLimitQuery($page=1, $limit=10){
        $offset = ($page - 1) * $limit;
        $query = "
            LIMIT $offset, $limit 
        ";
        return $query;
    }

    public function getSearchQuery($key, $searchFields, $whereArray=[]){
        $key = $this->parserKey($key);
        $params = [];
        $search = [];
        $where = [];
        $whereSql = "";

        foreach($whereArray as $w){
            $subquery = $w["query"];
            $where[] = "( $subquery )";
            $params = array_merge($params, $w["params"]);
        }

        if($key){
            list(
                $params, 
                $field
            ) = $this->addParam($params, "%$key%") ;

            foreach($searchFields as $searchField){
                $search[] = "$searchField LIKE :$field";
            }
        }

        if($search){
            $where[] = $this->groupConditions($search, "OR");
        }

        if($where){
            $whereSql = " WHERE " . $this->groupConditions($where, "AND") ;
        }

        return [$params, $whereSql];
    }

    /**
     * @param [] $query_params
     * @param string $value
     * @return []
     */
    private function addParam($params, $value){
        $key = "key".bin2hex(random_bytes(5)) ;
        $params[$key] = $value;
        return [$params, $key];
    }

    /**
     * @return String
     */
    public function groupConditions($conditions = [], $operator = "AND")
    {
        if (!$conditions) {
            return '';
        } else {
            $implode = '(' . implode(" $operator ", $conditions) . ')';
            return " $implode ";
        }
    }

    public function parserKey($key)
    {
        if($key){
            $key = preg_replace("!\s!u", ' ', $key);
            $key = trim($key);
        }
        return $key;
    }

    /**
     * @param Object $request
     * @param String $alias_base_table
     * @return String
     */
    private function getOrderQuery($orderBy, $order){

        $query = "";

        if (
            $orderBy && $order
        ) {
           	$query = "
                ORDER BY 
                    $orderBy $order
            ";
        }

        return $query;
    }
}