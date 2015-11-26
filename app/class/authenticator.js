var AUTHENTICATOR = new function () {
    
    this.auth = function (request) {
        if (!request.headers.token) return false;
    }

    this.ip = function (request, response, next) {
        if (request.headers['x-forwarded-for'] != CONFIG.ALLOWED && request.connection.remoteAddress != CONFIG.ALLOWED) {
            response.statusCode = 404;
            response.send ();

            return;
        }

        next ();
    }

    this.userBuildingPermission = function (user_token, building_id) {
        return true;
    }

    this.userPermissions = function (user_token) {
        return true;
    }

}

module.exports = AUTHENTICATOR;