import BUTTONFR from "common/structure/BUTTON/BUTTON.fr.js"
import BUTTONMG from "common/structure/BUTTON/BUTTON.mg.js"

function getButton(){
    if(window.lang == "MG"){
        return BUTTONMG
    }
    else if(window.lang == "FR"){
        return BUTTONFR
    }
}

export { getButton }