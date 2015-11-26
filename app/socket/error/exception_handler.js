var EXCEPTION = function (language) {

	this.error =  function (CODE) {

		if (typeof ERROR.KEY [CODE] == CONSTANTS.UNDEFINED)
			return {
				code: ERROR.CODE[CONSTANTS.UNDEFINED],
				message: ERROR.MESSAGE [language][ERROR.CODE[CONSTANTS.UNDEFINED]],
				key: ERROR.KEY [ERROR.CODE[CONSTANTS.UNDEFINED]]
			}

		return {
			code: CODE,
			message: ERROR.MESSAGE [language][CODE],
			key: ERROR.KEY [CODE]
		}

	}

}

module.exports = EXCEPTION;