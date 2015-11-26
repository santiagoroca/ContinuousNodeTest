var FILE_MANAGER = function (root, router) {

	this.absolute = function (file_name) {
		return root + file_name;
	}

	this.create = function (file_name, success_cback, error_cback) {
		if (this.exists (file_name)) {
			success_cback ();
			return;
		}

		mkdirp(this.absolute(file_name), function(err) {
	        if (err) {
	            LOG.error (err);
	            error_cback (err);
	            return;
	        }

	        success_cback ();
	    });
	}

	this.exists = function (file_name) {
		return fs.existsSync (this.absolute(file_name));
	}

	this.hasGeometries = function (file_name, offset) {
		return fs.readdirSync (this.absolute (file_name)).length > offset;
	}

	this.read = function (path) {
		if (!this.exists(path))
			throw ERROR.FILE_NOT_FOUND;

		return fs.readFileSync ( this.absolute(path), CONSTANTS.CONFIG.ENCODE);
	}

	this.list = function (directory) {
		return fs.readdirSync(this.absolute(directory));	
	}

	this.isEmpty = function (directory) {
		return fs.readdirSync (this.absolute (directory)).length <= 0;
	}

	this.send = function (data) {
		router.send (data);
	}

}

module.exports = FILE_MANAGER;