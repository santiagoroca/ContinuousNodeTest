var controller3d = new Controller3D (socketClientMock);

describe ('Controller 3D', function () {

	var send;

	beforeEach (function() {
		send = sinon.spy(socketClientMock.router, "send");
	});

	afterEach (function () {
		send.restore ();
		socketClientMock.fManager.read.restore ();
	});

	it ('should send config file', function () {
		sinon.stub(socketClientMock.fManager, 'read').returns(configMock);

		controller3d.getConfigFile.bind (socketClientMock)();

		assert.ok(socketClientMock.fManager.read.called);
		assert.ok(send.calledWith ({ 
			route: '/config/set',
			data: configMock
		}));
	});

	it ('should send materials file', function () {
		sinon.stub(socketClientMock.fManager, 'read').returns(materialsMock);

		controller3d.getMaterialFile.bind (socketClientMock)();
		
		assert.ok(socketClientMock.fManager.read.called);
		assert.ok(send.calledWith ({ 
			route: '/material/set',
			data: materialsMock
		}));
	});

});