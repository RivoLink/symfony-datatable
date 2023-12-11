import { 
    ClientAssets as Assets, 
    config 
} from "modules/client/ClientAssets.js";

function contentLines() {
	return config().contentLines
}

export { contentLines };
