var controller2d = new Controller2D (socketClientMock);

describe ('Controller 2D', function () {

	var queue;

	beforeEach (function() {
		queue = sinon.spy(socketClientMock.queue, "push");
	});

	afterEach (function () {
		socketClientMock.queue.push.restore ();
	});

	it ('Should send multiple floorplans', function () {
		controller2d.getFloorplan.bind (socketClientMock) (floorPlansMock);
		assert.equal (queue.callCount, floorPlansMock.length);
	});

	it ('Should send single floorplan', function () {
		controller2d.getFloorplan.bind (socketClientMock) ('floor_plan_name.js');
		assert.equal (queue.callCount, 1);
	});

});