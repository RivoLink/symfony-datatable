import { C } from "vue/helper/V02Component.jsx";
import { ModalCommonMethods } from "modules/common/ModalCommonMethods.jsx";
import { 
	ClientAssets as Assets,
    config 
} from "modules/client/ClientAssets.js";
import classNames from "classnames";
import Components from "vue/components/common/Components/Components.jsx";
import { 
    PwLoading,
} from "pw-components-jsx-dev";

export default C.make({
	...Components.getMethods(),
	...ModalCommonMethods.getMethods(),
	$render(h, instance) {
		return (
			<div
				class="modal fade"
				ref="modal"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Supprimer un client</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>
								{config("removeText")()}
							</p>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								{config("cancelRemoveButton").text}
							</button>
							{this.$button(config("saveRemoveButton")(config("removeParams"), instance))}
						</div>
						<PwLoading
							config={{
								isVisible: config().loadingRemoveModal,
								hasConfig: true,
								mode: "grow",
								color: "primary"
							}}
						/>
					</div>
				</div>
			</div>
		);
	},
});