var FileManagerMock = new function () {

	this.read = function (path, success_cback, error_cback) {
        success_cback (configMock);
	}

}

module.exports = FileManagerMock;