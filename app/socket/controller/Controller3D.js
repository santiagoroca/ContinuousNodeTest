var Controller3D = function (ctx) {

    this.getConfigFile = function () {
        ctx.router.send ({
            route: CONSTANTS.EP.CONFIG,
            data: this.fManager.read (this.building_id + CONSTANTS.FOLDER_3D + CONSTANTS.CONFIG_3D)
        });
    }

	this.getMaterialFile = function () {
        ctx.router.send ({
            route: CONSTANTS.EP.MATERIAL,
            data: this.fManager.read (this.building_id + CONSTANTS.FOLDER_3D + CONSTANTS.MATERIAL_3D)
        });
    }

    this.getAllGeometries = function () {
        var data = this.fManager.list (this.building_id + CONSTANTS.FOLDER_3D);

        ctx.router.send ({ route: CONSTANTS.EP.ASSET_INFO, data: data.length});

        data.slice (data.indexOf(CONSTANTS.CONFIG_3D), 1);
        data.slice (data.indexOf(CONSTANTS.MATERIAL_3D), 1);
        data.reverse ();

        for (var i = 0; i < data.length; i++) {
            ctx.queue.push({
                path : ctx.building_id + CONSTANTS.FOLDER_3D + data[i],
                route: CONSTANTS.EP.ADDITEM,
                extra: {
                    scale: data[i].substring (0, 1)
                }
            }, function (err) {});
        }
    }

}

module.exports = Controller3D;