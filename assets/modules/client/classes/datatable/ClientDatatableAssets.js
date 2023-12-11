import {
	addButton,
	saveButton,
	cancelSaveButton,
} from "modules/client/functions/datatable/client.datatable.top.buttons.js";

import { searchInput } from "modules/client/functions/datatable/client.datatable.top.inputs.js";

import {
	editButton,
	removeButton,
	detailButton,
	saveEditButton,
	cancelEditButton,
	saveRemoveButton,
	cancelRemoveButton,
	closeDetailButton,
} from "modules/client/functions/datatable/client.datatable.content.buttons.js";

import {
	pageSize,
} from "modules/client/functions/datatable/client.datatable.top.subcomponents.js";

import {
	headerColumns,
	sortColumns
} from "modules/client/functions/datatable/client.datatable.header.subcomponents.js";

import {
	contentLines,
} from "modules/client/functions/datatable/client.datatable.content.subcomponents.js";

import {
	pagination,
} from "modules/client/functions/datatable/client.datatable.bottom.subcomponents.js";

import { createModal } from "modules/client/functions/datatable/client.datatable.top.modals.js";
import {
	editModal,
	removeModal,
	detailModal,
} from "modules/client/functions/datatable/client.datatable.content.modals.js";

class ClientDatatableAssets {
	static addButton = addButton;
	static createModal = createModal;
	static saveButton = saveButton;
	static cancelSaveButton = cancelSaveButton;

	static pageSize = pageSize;

	static searchInput = searchInput;
	
	static headerColumns = headerColumns;
	static sortColumns = sortColumns;
	static contentLines = contentLines;

	static editButton = editButton;
	static editModal = editModal;
	static saveEditButton = saveEditButton;
	static cancelEditButton = cancelEditButton;

	static removeButton = removeButton;
	static removeModal = removeModal;
	static saveRemoveButton = saveRemoveButton;
	static cancelRemoveButton = cancelRemoveButton;

	static detailButton = detailButton;
	static detailModal = detailModal;
	static closeDetailButton = closeDetailButton;

	static pagination = pagination;
}
export { ClientDatatableAssets };
