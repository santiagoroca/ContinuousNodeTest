var SocketClientConnectionMock = new function () {

	this.on = function (evtName, clb) {}

	this.send = function (evtName, data) {}

}

module.exports = SocketClientConnectionMock;