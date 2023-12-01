import { ClientConfig } from "modules/client/ClientConfig/ClientConfig.js"
import { ClientDatatable } from "modules/client/ClientDatatable/ClientDatatable.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js"

import CreateModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"
import EditModal from "vue/components/client/ClientTable/ClientTableComponents/EditClientModal/EditClientModal.jsx"
import RemoveModal from "vue/components/client/ClientTable/ClientTableComponents/RemoveClientModal/RemoveClientModal.jsx"
import DetailModal from "vue/components/client/ClientTable/ClientTableComponents/DetailClientModal/DetailClientModal.jsx"

class ClientAssets{
	static get(){	
		return {
			ClientConfig,
			ClientDatatable,
			ComponentAssets,
			CreateModal,
			EditModal,
			RemoveModal,
			DetailModal,
		}
	} 
	static config(key){
		if(!key){
			return ClientAssets.get().ClientConfig.params;
		}
		return ClientAssets.get().ClientConfig.params[key]
	}
	static clientConfig(){
		return ClientAssets.get().ClientConfig
	}
	static datatable(){
		if (!ClientAssets.get().ClientDatatable) {
			return {}
		}
		return ClientAssets.get().ClientDatatable
	}
	static createModal(){
		if (!ClientAssets.get().CreateModal) {
			return {}
		}
		return ClientAssets.get().CreateModal
	}
	static editModal(){
		if (!ClientAssets.get().EditModal) {
			return {}
		}
		return ClientAssets.get().EditModal
	}
	static removeModal(){
		if (!ClientAssets.get().RemoveModal) {
			return {}
		}
		return ClientAssets.get().RemoveModal
	}
	static detailModal(){
		if (!ClientAssets.get().DetailModal) {
			return {}
		}
		return ClientAssets.get().DetailModal
	}
	static componentAssets(){
		if (!ClientAssets.get().ComponentAssets) {
			return {}
		}
		return ClientAssets.get().ComponentAssets
	}
}

function field(key) {
	return ClientAssets.config()
}
function refs(field) {
	return field.instance.$refs[field.id].$refs
}
function config(key) {
	return ClientAssets.config(key);
}
function getText(key, conversion=undefined) {
	return ClientAssets.componentAssets().getText(key, conversion);
}
function datatable() {
	return ClientAssets.datatable();
}

export {
	ClientAssets, 
	field,
	refs,
	config,
	getText,
	datatable,
}