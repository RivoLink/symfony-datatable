import FIELDMG from "common/structure/FIELD/LANG/FIELD.mg.js"
import FIELDFR from "common/structure/FIELD/LANG/FIELD.fr.js"

function getFields(){
    if(window.lang == "MG"){
        return FIELDMG
    }
    else if(window.lang == "FR"){
        return FIELDFR
    }
    return FIELDFR
}

export { getFields }