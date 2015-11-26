var Controller2D = function (ctx) {

    this.getFloorplan = function (floor_plan) {
        if (floor_plan instanceof Array) {
            for (var i = 0; i < floor_plan.length; i++) {
               ctx.queue.push({
                    path: ctx.building_id + CONSTANTS.FOLDER_2D + floor_plan [i],
                    route: CONSTANTS.EP.GEOMETRY_2D
                }, function (err) {
                });
            }
        } else {
            ctx.queue.push({
                path: this.building_id + CONSTANTS.FOLDER_2D + floor_plan,
                route: CONSTANTS.EP.GEOMETRY_2D
            }, function (err) {
            });
        }

    }

}

module.exports = Controller2D;