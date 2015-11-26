var INTERCEPTORS = function () {

    this.userHasPermission = function () {
        if (!this.router.userHasPermission ())
            throw ERROR.CODE.USER_ACCESS_DENIED;
    }

    this.isBuildingSelected = function () {
        if (!this.building_id)
            throw ERROR.CODE.NO_BUILDING_SELECTED;
    }

    this.userHasPermissionOnBuilding = function () {
        if (!this.router.userHasPermissionOnBuilding ())
            throw ERROR.CODE.USER_PERMISSION_DENIED;
    }

    this.isFolderExists = function () {
        if (!this.fManager.exists(this.building_id))
            throw ERROR.CODE.FOLDER_NOT_EXIST;
    }

    this.isFolderNotEmpty = function () {
        if (this.fManager.isEmpty(this.building_id))
            throw ERROR.CODE.FOLDER_IS_EMPTY;
    }

    this.is3dFolderExists = function () {
        if (!this.fManager.exists(this.building_id + CONSTANTS.FOLDER_3D))
            throw ERROR.CODE.FOLDER_3D_NOT_EXIST;   
    }

    this.is3dFolderNotEmpty = function () {
        if (this.fManager.isEmpty(this.building_id + CONSTANTS.FOLDER_3D))
            throw ERROR.CODE.FOLDER_3D_IS_EMPTY;   
    }

    this.hasConfigFile = function () {
        if (!this.fManager.exists(this.building_id + CONSTANTS.FOLDER_3D + CONSTANTS.CONFIG_3D))
            throw ERROR.CODE.MISSING_3D_CONFIG_FILE;
    }

    this.hasMaterialFile = function () {
        if (!this.fManager.exists(this.building_id + CONSTANTS.FOLDER_3D + CONSTANTS.MATERIAL_3D))
            throw ERROR.CODE.MISSING_3D_MATERIALS_FILE;
    }

    this.has3DGeometries = function () {
        if (!this.fManager.hasGeometries (this.building_id + CONSTANTS.FOLDER_3D, 2))
            throw ERROR.CODE.MISSING_3D_GEOMETRIES;
    }

    this.is2dFolderExists = function () {
        if (!this.fManager.exists(this.building_id + CONSTANTS.FOLDER_2D))
            throw ERROR.CODE.FOLDER_2D_NOT_EXIST;
    }

    this.is2dFolderNotEmpty = function () {
        if (this.fManager.isEmpty(this.building_id + CONSTANTS.FOLDER_2D))
            throw ERROR.CODE.FOLDER_2D_IS_EMPTY;   
    }

    this.has2DGeometries = function () {
        if (!this.fManager.hasGeometries(this.building_id + CONSTANTS.FOLDER_2D, 0))
            throw ERROR.CODE.MISSING_2D_GEOMETRIES;   
    }

}

module.exports = INTERCEPTORS;