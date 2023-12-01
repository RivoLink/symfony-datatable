import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	ClientAssets as Assets,
    config,
    datatable 
} from "modules/client/ClientAssets.js";

function searchInput(){
	var field = ComponentAssets.FieldManager.create("CLIENT_SEARCH", config().displayPage);
	field.onInput = (params={}) =>{
		var {value, event, input} = params;
		config().searchInput.value = value;
		config().pagination.page = 1;
		config().instance.refresh();
		datatable().reload();
	}
    return field;
}

export {
	searchInput
}