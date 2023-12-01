import { Api } from "modules/common/Api.js";

class ClientApi{
	static apis = {};

	static init(){
		ClientApi.apis.listAction = new Api({url: window.api_list_client});
		ClientApi.apis.createAction = new Api({url: window.api_create_client});
		ClientApi.apis.getAction = new Api({url: window.api_get_client});
		ClientApi.apis.editAction = new Api({url: window.api_edit_client});
		ClientApi.apis.removeAction = new Api({url: window.api_remove_client});
	}
	static listApi(params={}){
		var {data={}, then=()=>{}}=params;
		ClientApi.apis.listAction.run({data: json_encode(data), then})
	}
	static createApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		ClientApi.apis.createAction.run({data, then})
	}
	static editApi(params={}){
		var {data={}, then=()=>{}}=params;
		var query = data;
		var data = {
			query: json_encode(query)
		}
		ClientApi.apis.editAction.run({data, then})
	}
	static getApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		ClientApi.apis.getAction.run({data, then})
	}
	static removeApi(params={}){
		var {id, then=()=>{}}=params;
		var query = {
			id: id
		}
		var data = {
			query: json_encode(query)
		}
		ClientApi.apis.removeAction.run({data, then})
	}
}

export {
	ClientApi
}