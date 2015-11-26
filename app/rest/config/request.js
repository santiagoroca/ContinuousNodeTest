var REQUEST = new function () {

	this.setHeaders = function (req, res, next) {
	    res.set(CONSTANTS.HEADER.CONTENT_TYPE, CONSTANTS.HEADER.APP_JSON);
	    next ();
	}

	this.response = function (code, result, message, errors, data, response) {
		response.statusCode = code;

	    response.send(JSON.stringify(
	        {
	            "response": {
	                code: code,
	                result: result,
	                message: message,
	                timestamp: new Date().getTime(),
	                errors: errors,
	                data: data
	            }
	        }
	    ));

	}

}

module.exports = REQUEST;