describe ('Web Socket', function () {

	var socket;

	function runRequest () {
		socket.router.getConnection ().forceMessage ({
			route: '/socket/geometries/2d/geometries/floorplan'
		});
	}

	before(function () {
		socket  = new SocketClient (new MockHTTPRequest());
	});

	describe ('Error Handling', function () {

		afterEach (function () {
			socket.router.getConnection ().send = function () {}

			if (socket.fManager.exists.isSinonProxy) socket.fManager.exists.restore ();
			if (socket.fManager.isEmpty.isSinonProxy) socket.fManager.isEmpty.restore ();
			if (socket.fManager.hasGeometries.isSinonProxy) socket.fManager.hasGeometries.restore ();
		});

		it ('Should return USER_ACCESS_DENIED', function (done) {
			socket.router.getConnection ().send = function (rsp) {
				assert.equal (JSON.parse (rsp).data.key, 'USER_ACCESS_DENIED');
				done ();
			}

			runRequest ();
		});

		it ('Should return NO_BUILDING_SELECTED', function (done) {
			socket.router.getConnection ().forceMessage ({
				route: '/register',
				data: 'fd7afcaccb050ec19b7377b2a5f41f9a'
			});		

			socket.router.getConnection ().send = function (rsp) {
				assert.equal (JSON.parse (rsp).data.key, 'NO_BUILDING_SELECTED');
				done ();
			}

			runRequest ();
		});

		it ('Should return FOLDER_NOT_EXIST', function (done) {
			socket.router.getConnection ().forceMessage ({
				route: '/socket/configurate/building',
				data: '0'
			});

			sinon.stub(socket.fManager, 'exists').returns(false);

			socket.router.getConnection ().send = function (rsp) {
				assert.equal (JSON.parse (rsp).data.key, 'FOLDER_NOT_EXIST');
				done ();
			} 

			runRequest ();
		});

		describe ('2D Geometries', function () {

			beforeEach (function () {
				sinon.stub(socket.fManager, 'exists').returns(true);

			});

			it ('Should return FOLDER_2D_NOT_EXIST', function (done) {
				socket.fManager.exists.withArgs('0/2d/').returns(false);

				socket.router.getConnection ().send = function (rsp) {
					assert.equal (JSON.parse (rsp).data.key, 'FOLDER_2D_NOT_EXIST');
					done ();
				}

				runRequest ();
			});

			it ('Should return FOLDER_2D_IS_EMPTY', function (done) {
				sinon.stub(socket.fManager, 'isEmpty').returns(true);

				socket.router.getConnection ().send = function (rsp) {
					assert.equal (JSON.parse (rsp).data.key, 'FOLDER_2D_IS_EMPTY');
					done ();
				}

				runRequest ();
			});

			it ('Should return MISSING_2D_GEOMETRIES', function (done) {
				sinon.stub(socket.fManager, 'isEmpty').returns(false);
				sinon.stub(socket.fManager, 'hasGeometries').returns(false);

				socket.router.getConnection ().send = function (rsp) {
					assert.equal (JSON.parse (rsp).data.key, 'MISSING_2D_GEOMETRIES');
					done ();
				}

				runRequest ();
			});

		});
		
	})

});