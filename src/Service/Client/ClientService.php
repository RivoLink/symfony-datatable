<?php
namespace App\Service\Client;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Client;
use App\Constant\Client\ClientSuccessMessages;
use App\Constant\Client\ClientFailureMessages;
use App\Service\Datatable\DatatableService;

class ClientService
{
    private $em;
    private $cnx;
    private $datatable;

    public function __construct(EntityManagerInterface $em, DatatableService $datatable)
    {
        $this->em = $em;
        $this->datatable = $datatable;
        $this->cnx = $this->em->getConnection();
    }

    public function listAction($data)
    {
        // Define the initial query
        $query = "(
            SELECT
                client.id AS id,
                client.name AS client_name,
                client.phone AS client_phone
            FROM
                client
        )";

        // Define the search fields
        $searchFields = ["client_name", "client_phone"];

        $where = [];

        $data['search_fields'] = $searchFields;
        $data['where_array'] = $where;

        $result = $this->datatable->getResult($query, $data);

        return $result;
    }

    /**
     * @param array $content
     * @return Client
     */
    public function createAction($data): Client
    {
        $name = trim($data["name"]);
        $phone = trim($data["phone"]);

        $client = new Client();
        $client->setName($name);
        $client->setPhone($phone);

        $this->em->persist($client);
        $this->em->flush();
        return $client;
    }

    public function editAction($data): ?Client
    {
        $id = trim($data["id"]);
        $name = trim($data["name"]);
        $phone = trim($data["phone"]);

        $client = $this->em->getRepository(Client::class)->findOneBy(["id" => $id]);
        if (!$client) {
            return null;
        }

        $client->setName($name);
        $client->setPhone($phone);

        /* 
            Prerequisite: Define the save function in the repository
        */
        $this->em->getRepository(Client::class)->save($client);

        return $client;
    }

    public function getAction($data): ?array
    {
        $id = trim($data["id"]);

        $client = $this->em->getRepository(Client::class)->findOneBy(["id" => $id]);

        if (!$client) {
            return null;
        }

        $results["name"] = $client->getName();
        $results["phone"] = $client->getPhone();
        return $results;
    }

    public function removeAction($data): bool
    {
        $id = $data["id"];

        $client = $this->em->getRepository(Client::class)->findOneBy([
            "id" => $id,
        ]);
        if (!$client) {
            return false;
        }

        /* 
            Prerequisite: Define the remove function in the repository
        */
        $this->em->getRepository(Client::class)->remove($client);

        return true;
    }

    public function removeMultiple($data): void
    {
        $ids = $data["ids"];

        $instances = $this->em->getRepository(Client::class)->findBy([
            "id" => $ids,
        ]);

        foreach ($instances as $instance) {
            $this->em->remove($instance);
        }

        $this->em->flush();
    }

    /**
     * Update multiple client instances based on provided data.
     *
     * @param array $data The data containing updates for client instances.
     * @return Client[]|null An array of updated client instances, or null if no updates were made.
     */
    public function editMultiple($data)
    {
        $instanceUpdates = $data["instance_updates"];

        $ids = [];
        $instanceUpdatesIndexation = [];

        foreach ($instanceUpdates as $instance_update) {
            if (isset($instance_update["id"])) {
                $ids[] = $instance_update["id"];
                $instanceUpdatesIndexation[$instance_update["id"]] = $instance_update;
            }
        }

        $instances = $this->em->getRepository(Client::class)->findBy([
            "id" => $ids,
        ]);

        if (count($instances) == 0) {
            return false;
        }

        foreach ($instances as $instance) {
            if (isset($instanceUpdatesIndexation[$instance->getId()])) {
                $updateData = $instanceUpdatesIndexation[$instance->getId()];
                /*
                    Place here the updates
                */
                if (isset($updateData["name"])) {
                    $instance->setName($updateData["name"]);
                }
                if (isset($updateData["phone"])) {
                    $instance->setPhone($updateData["phone"]);
                }
            }
        }

        $this->em->flush();

        return $instances;
    }
}
