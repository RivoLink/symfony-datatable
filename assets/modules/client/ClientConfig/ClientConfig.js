import { ClientConfigAssets } from "./ClientConfigAssets.js";
import { FIELD } from "common/structure/FIELD/FIELD.js";

class ClientConfig {
    static params = {};
    static init() {
        //GLOBAL CONFIGURAITONS
        ClientConfig.params.lang = "FR";
        ClientConfig.params.domain = "DEFAULT";
        ClientConfig.params.displayPage = "CLIENT_LIST";

        FIELD.init(ClientConfig.params);

        ClientConfig.params.haveAction = true;

        ClientConfigAssets.ClientConfigTop.configure();
        ClientConfigAssets.ClientConfigHeader.configure();
        ClientConfigAssets.ClientConfigContent.configure();
        ClientConfigAssets.ClientConfigBottom.configure();
    }
}

export {
    ClientConfig
};
