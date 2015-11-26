var FOLDER = new function () {

	this.valid_id = function (req, res, next) {
		if (!req.headers.id)
			REQUEST.response (401, CONSTANTS.MESSAGES.ERROR, CONSTANTS.MESSAGES.FOLDER_NOT_CREATED, [CONSTANTS.MESSAGES.ID_NOT_SET], {}, res);

		next ();
	}

	this.create_folder = function (req, res) {
	    new FileManager (CONSTANTS.CONFIG.ROOTPATH)
	        .create (req.headers.id, function () {
	            REQUEST.response (201, CONSTANTS.MESSAGES.SUCCESS, CONSTANTS.MESSAGES.FOLDER_CREATED, [], {}, res);
	        }, function (err) {
	            REQUEST.response (401, CONSTANTS.MESSAGES.ERROR, CONSTANTS.MESSAGES.FOLDER_NOT_CREATED, [err], {}, res);
	        });
	}

}

module.exports = FOLDER;