import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

import { 
    ClientAssets as Assets, 
    config,
	getText
} from "modules/client/ClientAssets.js";
import {ClientDecorator} from "vue/components/client/ClientTable/ClientDecorator.jsx";
import classNames from "classnames";

class ClientTableOverride{
	static getMethods(){
		return {
			...ClientDecorator.getMethods(),
			renderDatatableCreate(){
				return (
					<div class="float-right">
						{CommonTable.getMethod(this, "TopActions")()}
					</div>
				)
			},
			renderDatatableFull(){
				return (
					<div class="container">
						{this.renderDatatableTop()}
						<table class="table table-hover">
							<thead>
								{CommonTable.getMethod(this, "Header")()}
							</thead>
							<tbody>
								{CommonTable.getMethod(this, "Content")()}
							</tbody>
						</table>
						{this.renderDatatableBottom()}
					</div>
				)
			},
			renderDatatableTop(){
				return (
					<div>
						<div class="row mb-3">
							<div class="col-6">
								{CommonTable.getMethod(this, "PageSize")()}
							</div>
							<div class="col-6">
								{CommonTable.getMethod(this, "SearchBar")()}
							</div>
						</div>
					</div>
				)
			},
			renderDatatableBottom(){
				if(this.getConfig().pagination.pages >= 2){

					return (
						<div class="float-right">
							{this.$dottedPagination(this.getConfig().pagination)}
						</div>
					)
				}
			},
			renderDatatableDetailButton(params = {}){
				return this.$iconButton(
					this.getConfig().detailButton(params),
					{
						"content": this.detailIcon(),
						"customClass": "btn-primary rounded_button detail_button"
					}
					 
				);
			},
			renderDatatableEditButton(params = {}){
				return this.$iconButton(
					this.getConfig().editButton(params),
					{
						"content": this.editIcon(),
						"customClass": "btn-secondary rounded_button edit_button"
					}
				);
			},
			renderDatatableRemoveButton(params = {}){
				return this.$iconButton(
					this.getConfig().removeButton(params),
					{
						"content": this.removeIcon(),
						"customClass": "btn-danger rounded_button remove_button"
					}
				);
			},
			renderDatatablePageSize(){
				return <div class="size_wrapper">
					<div class="mr-1">{getText("COMMON").SHOW}</div> 
					{this.$commonSelect(this.getConfig().pageSize.field())}
					<div class="ml-1">{getText("COMMON").ENTRY}</div>
				</div>
			},
			renderDatatableSearchBar(){
				return this.$inputInline(this.getConfig().searchInput);
			},
			renderDatatableLoadingContent(){
				return this.$commonLoading(this.getConfig().loadingContent);
			},
			renderDatatableHeaderColumn({headerColumn} = {}){
				var orderClass = "sorting";
				var { order } = headerColumn;
				if(order == "ASC"){
					orderClass = "sorting sorting_asc";
				}
				else if(order == "DESC"){
					orderClass = "sorting sorting_desc";
				}
				
				return (
					<th class={classNames(orderClass)} onClick={config().sortColumns(headerColumn)}>
						{headerColumn.label}
					</th>
				)
			}
		}
	}
}


export {
	ClientTableOverride
}