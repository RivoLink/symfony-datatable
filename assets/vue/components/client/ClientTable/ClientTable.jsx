import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";
import styles from "./ClientTable.scss?module";
import CreateClientModal from "vue/components/client/ClientTable/ClientTableComponents/CreateClientModal/CreateClientModal.jsx"
import { CommonTable } from "vue/components/common/CommonTable/CommonTable.jsx";
import { CommonTableOverride } from "vue/components/client/ClientTable/CommonTableOverride.jsx";
import { 
	ClientAssets as Assets, 
	getText, 
	config
} from "modules/client/ClientAssets.js";
import { 
    PwLoading,
} from "pw-components-jsx-dev";

export default C.make({
	...CommonTable.getMethods(),
	...CommonTableOverride.getMethods(),

	getConfig(){
		return config();
	},
	//TODO use another file to autoprefix using getMethods
	renderDatatableContent(){
		if (!this.getConfig().contentLines.length) {
			return (
				<tr>
					<td colspan={this.getConfig().headerColumns.columns.length}>
						{getText("CLIENT_LIST").EMPTY_MESSAGE}
					</td>
				</tr>
			);
		}
		var trs = this.getConfig().contentLines.map((contentLine = {}, line) =>{
			return CommonTable.getMethod(this, "ContentLine")({contentLine, line})
		});
		return trs
	},
	$render(h, instance) {
		config().instance = this
		var {datatable_load={}}= config()
		
		return (
			<div class="container">
				<div class="layout-px-spacing">
					<div class="middle-content container-xxl p-0 mt-2">
						<div class="page-meta">
							<nav class="breadcrumb-style-one" aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item">
										{this.renderDatatableCreate()}
									</li>
								</ol>
							</nav>
							<div class="card-body">
								{this.renderDatatableFull()}
								<PwLoading
									ref="loading"
									config={{
										isVisible: datatable_load.isLoading,
										hasConfig:true,
										mode: "grow",
										color: "primary"
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		)
	},
});