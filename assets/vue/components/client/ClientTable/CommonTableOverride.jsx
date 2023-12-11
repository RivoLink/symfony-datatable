import {CommonTable} from "vue/components/common/CommonTable/CommonTable.jsx";

import { 
    ClientAssets as Assets, 
    config,
    datatable
} from "modules/client/ClientAssets.js";
import classNames from "classnames";
import {ClientDecorator} from "vue/components/client/ClientTable/ClientDecorator.jsx";

class CommonTableOverride{
	static getMethods(){
		return {
			...ClientDecorator.getMethods(),
			//TODO autoprefix using getMethods
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
			renderDatatableCreate(){
				return (
					<div class="float-right">
						{CommonTable.getMethod(this, "TopActions")()}
					</div>
				)
			},
			renderDatatableFull(){
				return (
					<div class="container dataTables_wrapper">
						{this.renderDatatableTop()}
						<div class="table-responsive">

							<table class="table dt-table-hover dataTable no-footer">
								<thead>
									{CommonTable.getMethod(this, "Header")()}
								</thead>
								<tbody>
									{CommonTable.getMethod(this, "Content")()}
								</tbody>
							</table>
						</div>
						{this.renderDatatableBottom()}
					</div>
				)
			},
			renderDatatableTop(){
				var params = {
					"content": this.searchIcon(),
					"customClass": "input_search"
				}
				return (
					<div class="dt--top-section">
						<div class="row">
							<div class="col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center">
							<div class="dataTables_length">
								<label>
								Results :
								{this.$commonSelect(this.getConfig().pageSize.field())}
								</label>
							</div>
							</div>
							<div class="col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3">
							<div class="dataTables_filter">
								{this.$inputWithIcon(this.getConfig().searchInput, params)}
							</div>
							</div>
						</div>
					</div>
				)
			},
			renderDatatableBottom(){
				return (
					<div class="dt--bottom-section d-sm-flex justify-content-sm-between text-center">
					<div class="dt--pages-count mb-sm-0 mb-3 pages_count_wrapper">
						<div class="dataTables_info" role="status" aria-live="polite">
						
						</div>
					</div>
					<div class="dt--pagination">
						<div class="dataTables_paginate paging_simple_numbers" id="zero-config_paginate">
							{CommonTable.getMethod(this, "Pagination")()}
						</div>
					</div>
					</div>
				)
			},
			renderDatatablePagination(){
				var params = {
					"prevContent": this.prevIcon(),
					"nextContent": this.nextIcon()
				}
				return this.$paginationCork(this.getConfig().pagination, params);
			},
			renderDatatableDetailButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().detailButton(params),
					{
						"content": this.detailIcon(),
						"customClass": "rounded_button mr-3"
					}
					 
				);
			},
			renderDatatableEditButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().editButton(params),
					{
						"content": this.editIcon(),
						"customClass": "rounded_button mr-3"
					}
				);
			},
			renderDatatableRemoveButton(params = {}){
				return this.$iconButtonCork(
					this.getConfig().removeButton(params),
					{
						"content": this.removeIcon(),
						"customClass": "rounded_button"
					}
				);
			},
			renderDatatablePageSize(){
				return <div class="size_wrapper">
					<div class="mr-1">Show</div> 
					{this.$commonSelect(this.getConfig().pageSize.field())}
					<div class="ml-1">{getText("COMMON").ENTRY}</div>
				</div>
			},
			renderDatatableSearchBar(){
				return this.$inputInline(this.getConfig().searchInput);
			},
			renderDatatableHeaderColumn({headerColumn} = {}){
				var orderClass = "sorting";
				var { order } = headerColumn;
				if(order == "ASC"){
					orderClass = "sorting_asc";
				}
				else if(order == "DESC"){
					orderClass = "sorting_desc";
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
	CommonTableOverride
}