import {FieldManager, getField, getText} from "common/functions/getField.js"
import { getButton } from "common/functions/getButton.js";
import  Button from "common/classes/Button.js";

class ComponentAssets{
	static FieldManager = FieldManager;
	static getButton = getButton;
	static getField = getField;
	static getText = getText;
	static Button = Button;
}

export {
	ComponentAssets
}