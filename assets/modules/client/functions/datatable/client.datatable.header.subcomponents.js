import { 
	ClientAssets as Assets,
    config,
    datatable,
	getText
} from "modules/client/ClientAssets.js";
import { toggleOrder } from "modules/common/datatableUtils.js";

function headerColumns() {
	return {
		orderBy:"client_name",
		order:"ASC",
		columns:[{
			name:"id",
			label:"ID",
		},{
			name:"client_name",
			label:getText("CLIENT_NAME").TH,
		},{
			name:"client_phone",
			label:getText("CLIENT_PHONE").TH,
		}],
	}
}

function sortColumns(headerColumn){
	return () => {

		var { name = "", index = null, order:columnOrder = null } = headerColumn;
		config().headerColumns.orderBy = name;
		var order = toggleOrder(columnOrder);
		config().headerColumns.order = order;
		config().headerColumns.columns.map((column) => {
			return column.order = null;
		})
		config().headerColumns.columns[index].order = order;
		config().instance.refresh()
		datatable().reload();
	}
}

export { headerColumns, sortColumns };
