import {CommonDatatableAssets} from "./CommonDatatableAssets.jsx";
import Components from "vue/components/common/Components/Components.jsx";


class CommonTable{
	static prefix(){
		return 'renderDatatable';
	}
	static getMethod(instance, name){
		var prefix = CommonTable.prefix()
		var prefixedName = `${prefix}${name}`;
		return instance[prefixedName]
	}
	static baseMethods(){
		return {
			...CommonDatatableAssets.CommonDatatableFull.getMethods(),
			...CommonDatatableAssets.CommonDatatableTop.getMethods(),
			...CommonDatatableAssets.CommonDatatableHeader.getMethods(),
			...CommonDatatableAssets.CommonDatatableContent.getMethods(),
			...CommonDatatableAssets.CommonDatatableBottom.getMethods(),
		}
	}
	static initializedMethods;
	static getMethods(){
		if(CommonTable.initializedMethods){
			return CommonTable.initializedMethods;
		}
		var baseMethods = CommonTable.baseMethods();
		var prefix = CommonTable.prefix()
		var methods = {
			...Components.getMethods(),
			getConfig(){
				//To override by configuration
			}
		}
		Object.keys(baseMethods).map((name) =>{
			var methodContent = baseMethods[name]
			var prefixedName = `${prefix}${name}`;
			methods[prefixedName] = methodContent;
		});
		CommonTable.initializedMethods = methods
		return methods
	}
}

export {
	CommonTable
}