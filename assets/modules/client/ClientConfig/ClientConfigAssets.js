import { ClientConfigTop } from "./ClientConfigTop/ClientConfigTop.js";
import { ClientConfigHeader } from "./ClientConfigHeader/ClientConfigHeader.js";
import { ClientConfigContent } from "./ClientConfigContent/ClientConfigContent.js";
import { ClientConfigBottom } from "./ClientConfigBottom/ClientConfigBottom.js";

class ClientConfigAssets{
	static ClientConfigTop = ClientConfigTop;
	static ClientConfigHeader = ClientConfigHeader;
	static ClientConfigContent = ClientConfigContent;
	static ClientConfigBottom = ClientConfigBottom;
}

export {
	ClientConfigAssets
}