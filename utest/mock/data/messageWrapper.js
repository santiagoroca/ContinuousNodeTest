var MessageWrapper = new function () {

	this.wrap = function (data) {
		return {
			type: 'utf8',
			utf8Data: JSON.stringify (data)
		};
	}

}

module.exports = MessageWrapper;