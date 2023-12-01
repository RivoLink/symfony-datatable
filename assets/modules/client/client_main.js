import ClientTable from "vue/components/client/ClientTable/ClientTable";
import { C } from "vue/helper/V01Component";
import { setChildView } from "vue/helper/renderVue.js";
import { 
    ClientAssets as Assets, 
    config,
    datatable
} from "modules/client/ClientAssets.js";
import {FIELD} from "common/structure/FIELD/FIELD.js"
import { ClientApi } from "modules/client/classes/ClientApi.js";
import { calculatePageNumbers } from "modules/common/datatableUtils.js";

function main() {
    Assets.clientConfig().init();
    ClientApi.init();
    config().contentLines = {};
    if (!config().loadingContent) {
        config().loadingContent ={}
    }
    datatable().reload();
    setChildView("#app", ClientTable, {});
}

export { main };
