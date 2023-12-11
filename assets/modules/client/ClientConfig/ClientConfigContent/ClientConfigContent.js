import { ClientDatatableAssets } from "modules/client/classes/datatable/ClientDatatableAssets.js";
import { 
    ClientAssets as Assets,
    config
} from "modules/client/ClientAssets.js";

class ClientConfigContent{
    static configure(){
        config().contentLines = ClientDatatableAssets.contentLines();

        //CONTENT COLUMNS ACTIONS
        config().editButton = ClientDatatableAssets.editButton();
        config().removeButton = ClientDatatableAssets.removeButton();
        config().detailButton = ClientDatatableAssets.detailButton();

        //CONTENT MODALS
        config().editModal = ClientDatatableAssets.editModal();
        config().removeModal = ClientDatatableAssets.removeModal();
        config().detailModal = ClientDatatableAssets.detailModal();

        //CONTENT BUTTONS
        config().saveEditButton = ClientDatatableAssets.saveEditButton();
        config().cancelEditButton = ClientDatatableAssets.cancelEditButton();

        config().saveRemoveButton = ClientDatatableAssets.saveRemoveButton();
        config().cancelRemoveButton =ClientDatatableAssets.cancelRemoveButton();

        config().closeDetailButton = ClientDatatableAssets.closeDetailButton();
    }
}

export {
    ClientConfigContent
}