import { 
    ClientAssets as Assets, 
    config 
} from "modules/client/ClientAssets.js";

function contentLines() {
	return config().contentLines
}

function loadingContent() {
    var loadingContent = {
        isVisible: false,
        hasConfig: true,
        ref: "loading",
        mode:"border",
        color:"primary",
        className : "custom_spinner",
    }
    return loadingContent
}

export { 
    contentLines, 
    loadingContent 
};
