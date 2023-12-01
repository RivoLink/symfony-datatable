import ViewSvg from "vue/components/common/icons/ViewSvg.jsx";
import EditSvg from "vue/components/common/icons/EditSvg.jsx";
import RemoveSvg from "vue/components/common/icons/RemoveSvg.jsx";

class ClientDecorator{
	static getMethods(){
		return {
			detailIcon(){
				return <ViewSvg />
			},
			editIcon(){
				return <EditSvg />
			},
			removeIcon(){
				return <RemoveSvg />
			}
		}
	}
}


export {
	ClientDecorator
}