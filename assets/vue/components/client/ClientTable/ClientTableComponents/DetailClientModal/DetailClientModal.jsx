import { C } from "vue/helper/V02Component.jsx";
import { ModalCommonMethods } from "modules/common/ModalCommonMethods.jsx";
import classNames from "classnames";
import Components from "vue/components/common/Components/Components.jsx";
import { 
	ClientAssets as Assets,
	config
} from "modules/client/ClientAssets.js";

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
							<h5 class="modal-title">Detail sur un client</h5>
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
							<form>
								<div class="form-group mb-4 col-12">
									{config("detailFields").labels.id} :{" "}
									{config("detailFields").id}
								</div>
								<div class="form-group mb-4 col-12">
									{config("detailFields").labels.name} :{" "}
									{config("detailFields").name}
								</div>
								<div class="form-group mb-4 col-12">
									{config("detailFields").labels.phone} :{" "}  
									{config("detailFields").phone}
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								{config("closeDetailButton").text}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
});