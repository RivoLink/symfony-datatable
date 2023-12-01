import { ClientApi } from "modules/client/classes/ClientApi.js";
import { 
	ClientAssets as Assets,
    config,
    datatable
} from "modules/client/ClientAssets.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

class ClientDatatable{
	static reload(){
		var data = {
			page:config().pagination.page,
			size:config().pageSize.field().value,
			orderBy:config().headerColumns.orderBy,
			order:config().headerColumns.order,
			key:config().searchInput.value,
		}
	    config().loadingContent.isVisible = true;
		if(config().instance){
			config().instance.refresh()
		}
		var then = (result={})=>{
			var {datas=[], total=0, totalFiltered=0, size=10} = result;
	        config().contentLines = datas;
	    	config().loadingContent.isVisible = false;
			config().pageSize.field().value = size;
        	config().pagination.pages = calculatePageNumbers(totalFiltered, size);
			config().instance.refresh()
		}
		ClientApi.listApi({data, then})
	}
	static add(params){
		var {data={}, callback=()=>{}} = params
		config().instance.refresh()

		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.createApi({data, then})
	}
	static edit(params){
		var {data={}, callback=()=>{}} = params
		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.editApi({data, then})
	}
	static remove(params){
		var {id, callback=()=>{}} = params
		config().instance.refresh()
		var then = (result)=> {
			callback(result)
			if (result.code==200) {
				datatable().reload();
			}
			config().instance.refresh()
		}
		ClientApi.removeApi({id, then})
	}
}

export {
	ClientDatatable
}