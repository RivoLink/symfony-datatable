import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { 
	ClientAssets as Assets,
	config
} from "modules/client/ClientAssets.js";

class ClientConfigBottom{
	static configure(){
        //BOTTOM PAGINATION
        config().pagination = ClientDatatableAssets.pagination();
	}
}

export {
	ClientConfigBottom
}
