import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableBottom{
	static getMethods(){
		return {
			Bottom(){
				return (
					<div>
						{CommonTable.getMethod(this, "Pagination")()}
					</div>
				)
			},
			Pagination(){
				return this.$pagination(this.getConfig().pagination);
			}
		}
	}
}


export {
	CommonDatatableBottom
}