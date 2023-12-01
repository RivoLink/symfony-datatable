import { ComponentAssets } from "common/classes/ComponentAssets.js"
import { 
    ClientAssets as Assets,
    config,
    datatable
} from "modules/client/ClientAssets.js";

function addButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_ADD_BUTTON,
        domain: ComponentAssets.FieldManager.domain,
    });
    button.onSuccess = () =>{
        config().createModal().show();
    }
    return button
}

function saveButton(){
    return (fields, instance={}) =>{
        var button = ComponentAssets.Button.create({
            BUTTON: ComponentAssets.getButton().CLIENT_REGISTER,
            domain: ComponentAssets.FieldManager.domain,
            required_fields: Object.values([fields.name, fields.phone]),
        });
        button.onSuccess = () =>{
            config().loadingAddModal = true;
            config().instance.refresh()
            var callback = (result)=>{
                config().loadingAddModal = false;
                config().instance.refresh()
                if (result.code==200) {
                    var { modal } = instance.$refs;
                    $(modal).modal("hide")
                }
            }
            var data = {
                name:fields.name.value,
                phone:fields.phone.value,
            }
            datatable().add({data,callback})
        }
        return button
    }
}

function cancelSaveButton(){
    var button = ComponentAssets.Button.create({
        BUTTON: ComponentAssets.getButton().CLIENT_CANCEL_REGISTER,
        domain: ComponentAssets.FieldManager.domain,
        //required_fields: Object.values([lastname, password, confirm_password]),
    });
    return button
}


export {
    addButton,
    saveButton,
    cancelSaveButton
}
