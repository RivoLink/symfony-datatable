class Request{
	static post({url = "", data = {}, then = () =>{}} = params){
		$.ajax({
			url,
			method:"POST",
			data,
		})
		.always(then)
	}
}

export {
	Request
}