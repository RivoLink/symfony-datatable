class ModalCommonMethods {
	static getMethods() {
		return {
			show() {
				var { modal } = this.$refs;
				console.log({modal: $(modal)})
				$(modal).modal("show")
			},
			hide() {
				var { modal } = this.$refs;
				$(modal).modal("hide")
			},
		}
	}
}

export {
	ModalCommonMethods
}
