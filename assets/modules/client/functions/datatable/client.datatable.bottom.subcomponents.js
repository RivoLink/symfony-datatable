import { 
	ClientAssets as Assets,
    config,
    datatable
} from "modules/client/ClientAssets.js";

function pagination() {
	return {
		page:1,
		pages:1,
		prev: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page - 1;
			datatable().reload();
		},
		next: () =>{
			//TODO add restriction
			config().pagination.page = config().pagination.page + 1;
			datatable().reload();
		},
		goto: (page) =>{
			return () =>{
				config().pagination.page = page;
				datatable().reload();
			}
		},
	}
}

export {
    pagination
};
