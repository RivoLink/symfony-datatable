import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableTop{
	static getMethods(){
		return {
			Top(){
				return (
					<div>
						{CommonTable.getMethod(this, "TopActions")()}
						{CommonTable.getMethod(this, "PageSize")()}
						{CommonTable.getMethod(this, "SearchBar")()}
					</div>
				)
			},
			SearchBar(){
				return this.$input(this.getConfig().searchInput);
			},
			PageSize(){
				return this.$select(this.getConfig().pageSize.field());
			},
			TopActions(){
				return CommonTable.getMethod(this, "CreateButton")()
			},
			
			//Buttons
			CreateButton(params = {}){
				this.getConfig().addButton.params = {...this.getConfig().addButton.params, ...params}
				return this.$button(this.getConfig().addButton);
			},
		}
	}
}


export {
	CommonDatatableTop
}