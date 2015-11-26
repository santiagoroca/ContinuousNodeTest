var SocketClientMock = new function () {

	this.building_id = 23;
	
	this.router = socketClientConnectionMock;

	this.fManager = fileManagerMock;

	this.queue = async.queue(function (item, callback) {
        fManager.read (item.path, function (data) {
            router.send ({ route: item.route, data: data, extra: item.extra ? item.extra : null}, callback);
        }, callback);
    }, 1); 
    
}

module.exports = SocketClientMock;