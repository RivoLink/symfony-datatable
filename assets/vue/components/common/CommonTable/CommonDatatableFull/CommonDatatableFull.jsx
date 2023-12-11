import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableFull{
	static getMethods(){
		return {
			//Full
			Full(){
				return (
					<div>
						{CommonTable.getMethod(this, "Top")()}
						<table>
							<thead>
								{CommonTable.getMethod(this, "Header")()}
							</thead>
							<tbody>
								{CommonTable.getMethod(this, "Content")()}
							</tbody>
						</table>
						{CommonTable.getMethod(this, "Bottom")()}
					</div>
				)
			}
		}
	}
}


export {
	CommonDatatableFull
}