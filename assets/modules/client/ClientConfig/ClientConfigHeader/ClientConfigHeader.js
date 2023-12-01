import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { 
	ClientAssets as Assets,
	config
} from "modules/client/ClientAssets.js";

class ClientConfigHeader{
	static configure(){
        //HEADER COLUMNS
        config().headerColumns = ClientDatatableAssets.headerColumns();

		config().sortColumns = ClientDatatableAssets.sortColumns;
	}
}

export {
	ClientConfigHeader
}