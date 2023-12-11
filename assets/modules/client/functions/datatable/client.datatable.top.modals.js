import { showModal } from "common/modal/modal.js"
import { ComponentAssets } from "common/classes/ComponentAssets.js";
import { 
	ClientAssets as Assets,
	config
} from "modules/client/ClientAssets.js";


function addFields(){
	return {
		name:ComponentAssets.FieldManager.create("CLIENT_NAME", config().displayPage),
		phone:ComponentAssets.FieldManager.create("CLIENT_PHONE", config().displayPage)
	}
}

function createModal(){
	return ()=>{
		config().addFields = addFields()
		var modal = {
			show(){
				modal.instance = showModal(Assets.createModal(), {})
			},
			hide(){
				modal.instance.hide();
			}
		}
		return modal;
	}
}

export {
	createModal
}