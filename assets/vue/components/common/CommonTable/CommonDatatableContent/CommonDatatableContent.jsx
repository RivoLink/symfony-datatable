import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

class CommonDatatableContent{
	static getMethods(){
		return {
			Content(){
				var trs = this.getConfig().contentLines.map((contentLine = {}, line) =>{
					return CommonTable.getMethod(this, "ContentLine")({contentLine, line})
				});
				return trs
			},
			ContentLine({contentLine, line} = {}){
				var tds = this.getConfig().headerColumns.columns.map((headerColumn, index) =>{
					return CommonTable.getMethod(this, "ContentColumn")({contentLine, line, headerColumn, index})
				});
				if(this.getConfig().haveAction){
					tds.push(CommonTable.getMethod(this, "ContentColumnAction")({contentLine, line}))
				}
				return (
					<tr>{tds}</tr>
				)
			},
			ContentColumn({contentLine, line, headerColumn, index} = {}){
				var contentColumn = () =>{
					return contentLine[headerColumn.name]
				}
				return (
					<td>
						{contentColumn()}
					</td>
				)
			},
			//Exemple de contenu override
			ContentColumn__({contentLine, headerColumn} = {}){
				var contentColumn = () =>{
					return contentLine[headerColumn.name]
				}
				return (
					<td>
						{contentColumn()}
					</td>
				)
			},

			ContentColumnAction({contentLine, line}){
				return (
					<td>
						{CommonTable.getMethod(this, "DetailButton")({contentLine, line})}
						{CommonTable.getMethod(this, "EditButton")({contentLine, line})}
						{CommonTable.getMethod(this, "RemoveButton")({contentLine, line})}
					</td>
				)
			},

			DetailButton(params = {}){
				return this.$button(this.getConfig().detailButton(params));
			},
			EditButton(params = {}){
				return this.$button(this.getConfig().editButton(params));
			},
			RemoveButton(params = {}){
				return this.$button(this.getConfig().removeButton(params));
			},
		}
	}
}


export {
	CommonDatatableContent
}