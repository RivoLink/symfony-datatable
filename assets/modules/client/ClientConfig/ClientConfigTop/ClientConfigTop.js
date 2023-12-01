import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { 
    ClientAssets as Assets,
    config 
} from "modules/client/ClientAssets.js";

class ClientConfigTop{
	static configure(){ 
        //TOP BUTTONS
        config().addButton = ClientDatatableAssets.addButton();

        //TOP SEARCH
        config().searchInput = ClientDatatableAssets.searchInput();

        //TOP PAGESIZE
        config().pageSize = ClientDatatableAssets.pageSize();

        //TOP MODALS
        config().createModal = ClientDatatableAssets.createModal();

        config().saveButton = ClientDatatableAssets.saveButton();
        config().cancelSaveButton = ClientDatatableAssets.cancelSaveButton();
	}
}

export {
	ClientConfigTop
}
