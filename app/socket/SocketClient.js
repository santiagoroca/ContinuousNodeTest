var SocketClient = function (request) {

    this.router = new ROUTER (request.accept(null, request.origin), this);
    this.fManager = new FileManager (CONSTANTS.CONFIG.ROOTPATH, router);
    this.eHandler = new EXCEPTION_HANDLER ('US');
    this.building_id = null;

    var router = this.router;
    var fManager = this.fManager;
    var interceptor = new Interceptor ();
    var controller3D = new Controller3D (this);
    var controller2D = new Controller2D (this);
    var controllerSession = new ControllerSession ();

    this.queue = async.queue(function (item, callback) {
        router.send ({
            route: item.route,
            data: fManager.read (item.path),
            extra: item.extra ? item.extra : null
        }, callback);
    }, CONSTANTS.AMOUNT_GEOMETRIES_PER_USER);

    //Interceptors
    router.intercept (CONSTANTS.EVT.SOCKET, interceptor.userHasPermission);

    router.intercept (CONSTANTS.EVT.GEOMETRIES, [
        interceptor.isBuildingSelected,
        interceptor.userHasPermissionOnBuilding,
        interceptor.isFolderExists
    ]);

    router.intercept (CONSTANTS.EVT.GEOMETRIES_3D, [
        interceptor.is3dFolderExists,
        interceptor.is3dFolderNotEmpty
    ]);

    router.intercept (CONSTANTS.EVT.CONFIG_3D, interceptor.hasConfigFile);
    router.intercept (CONSTANTS.EVT.MATERIAL_3D, interceptor.hasMaterialFile);
    router.intercept (CONSTANTS.EVT.ASSETS_3D, interceptor.has3DGeometries);

    router.intercept (CONSTANTS.EVT.GEOMETRIES_2D, [
        interceptor.is2dFolderExists,
        interceptor.is2dFolderNotEmpty
    ]);

    router.intercept (CONSTANTS.EVT.ASSETS_2D, interceptor.has2DGeometries);

    //Methods
    router.on (CONSTANTS.EVT.REGISTER, controllerSession.register);
    router.on (CONSTANTS.EVT.CONFIG_BUILDING, controllerSession.setBuilding);
    router.on (CONSTANTS.EVT.CLOSE, controllerSession.close);

    router.on (CONSTANTS.EVT.CONFIG_3D, controller3D.getConfigFile);
    router.on (CONSTANTS.EVT.MATERIAL_3D, controller3D.getMaterialFile);
    router.on (CONSTANTS.EVT.ASSETS_3D, controller3D.getAllGeometries);

    router.on (CONSTANTS.EVT.FLOORPLAN_2D, controller2D.getFloorplan);
    router.on (CONSTANTS.EVT.FLOORPLANS_2D, controller2D.getFloorplans);
    
}

module.exports = SocketClient;