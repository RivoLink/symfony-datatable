
import ViewCorkSvg from "vue/components/common/icons/ViewCorkSvg.jsx";
import EditCorkSvg from "vue/components/common/icons/EditCorkSvg.jsx";
import RemoveCorkSvg from "vue/components/common/icons/RemoveCorkSvg.jsx";
import PrevCorkSvg from "vue/components/common/icons/PrevCorkSvg.jsx";
import NextCorkSvg from "vue/components/common/icons/NextCorkSvg.jsx";
import SearchCorkSvg from "vue/components/common/icons/SearchCorkSvg";

class ClientDecorator{
	static getMethods(){
		return {
			detailIcon(){
				return <ViewCorkSvg />
			},
			editIcon(){
				return <EditCorkSvg />
			},
			removeIcon(){
				return <RemoveCorkSvg />
			},
			prevIcon(){
				return <PrevCorkSvg />
			},
			nextIcon(){
				return <NextCorkSvg />
			},
			searchIcon(){
				return <SearchCorkSvg />
			},
		}
	}
}


export {
	ClientDecorator
}