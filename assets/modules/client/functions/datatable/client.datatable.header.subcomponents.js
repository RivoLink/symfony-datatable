import { 
	ClientAssets as Assets,
    getText 
} from "modules/client/ClientAssets.js";

function headerColumns() {
	return {
		orderBy:"createdAt",
		order:"DESC",
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

export {
    headerColumns
};