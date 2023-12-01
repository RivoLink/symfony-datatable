import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
	ClientAssets as Assets,
    config,
    datatable 
} from "modules/client/ClientAssets.js";

function pageSize() {
	var pageSize = {
		f:null,
		value:10,
		options: [5, 10, 25, 50, 100],
		field:() =>{
			if(pageSize.f){
				return pageSize.f
			}
			var field = ComponentAssets.FieldManager.create("PAGE_SIZE", config().displayPage);
			field.value = pageSize.value
			field.options = pageSize.options.map((key) =>{
				return {
		            value: key,
		            content: key,
		        }
			});
			field.onChange = () =>{
				config().pageSize.value = config().pageSize.field().value;
				datatable().reload();
			}
			pageSize.f = field
			return field
		},
	}
	return pageSize
}

export {
    pageSize
};