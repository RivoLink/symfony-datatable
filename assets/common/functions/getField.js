import {
    Field,
    VALIDATION,
    RESTRICTION,
    LIMITATION,
} from "pw-components-js-dev"
import { getFields } from "common/functions/getFields.js";

function getText(key, conversion){
    var fields = getFields();
    var field = fields[key]
    if(conversion){
        Object.keys(conversion).map((key) =>{
            var value = conversion[key]
            if(typeof value == "function"){
                value = value()
            }
            key = `{{${key}}}`
            field = field.split(key).join(value)
        })
    }
    return field
}

function getField(){
    if(FieldManager.Field){
        return FieldManager.Field;
    }
    var FIELD = getFields()
    Object.keys(FIELD).map((field) =>{
        if(typeof FIELD[field] == "string"){
            return true;
        }
        if(!FIELD[field] || !FIELD[field].LABEL){
            return true;
        }
        Field.add(field, FIELD[field]);
    })
    FieldManager.Field = Field.get();
    return FieldManager.Field;
}

class FieldManager{
    static Field = null;    
    static create(KEY, page) {
        var getStructure = () =>{
            if(!getField()[KEY]){
                console.warn(`Field / create : STRUCTURE for ${KEY} not defined`);
                return {}
            }
            return getField()[KEY]
        }
        var getValidation = () =>{
            if(
                !VALIDATION ||
                !VALIDATION.data ||
                !VALIDATION.data[KEY] ||
                !VALIDATION.data[KEY][page]
            ){
                console.warn(`Field / create : VALIDATION for ${KEY} not defined`);
                return []
            }
            return VALIDATION.data[KEY][page]
        }
        var getRestriction = () =>{
            if(
                !RESTRICTION ||
                !RESTRICTION.data ||
                !RESTRICTION.data[KEY]
            ){
                console.warn(`Field / create : RESTRICTION for ${KEY} not defined`);
                return []
            }
            return RESTRICTION.data[KEY]
        }
        var getLimitation = () =>{
            if(
                !LIMITATION ||
                !LIMITATION.data ||
                !LIMITATION.data[KEY]
            ){
                console.warn(`Field / create : LIMITATION for ${KEY} not defined`);
                return []
            }
            return LIMITATION.data[KEY]
        }
        var field = Field.create({
            domain:FieldManager.domain,
            STRUCTURE: getStructure(),
            VALIDATION: getValidation(),
            RESTRICTION: getRestriction(),
            LIMITATION: getLimitation(),
        });
        field.page = page;
        return field
    }
}


export { getField, FieldManager, getText }