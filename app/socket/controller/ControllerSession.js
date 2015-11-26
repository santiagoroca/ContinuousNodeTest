var ControllerSession = function () {

	this.setBuilding = function (folder_name) {
        this.building_id = folder_name + '/';        
    }

    this.register = function (token) {
        if (!this.router.userHasPermission (token))
            throw ERROR.CODE.USER_ACCESS_DENIED;
    }

    this.close = function () {
        this.queue.kill();
    }

}

module.exports = ControllerSession;