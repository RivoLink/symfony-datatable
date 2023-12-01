import { Request } from "./Request.js"

class Api{
	url;
	constructor({url} = {}){
		this.url = url
	}
	create({url, data , then} = {}){

	}
	run({data, then = () =>{}}){
		Request.post({
			url:this.url,
			data,
			then
		})
	}
}

export {
	Api
}
