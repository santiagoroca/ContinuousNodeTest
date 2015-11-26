var root = '/root/directory/';
var file_name = '23';

var fileManager = new FileManager (root, null);

describe ('File Manager', function () {

	beforeEach (function () {
		sinon.stub(fs, 'existsSync', function (path) {
			return true;
		});
	});

	afterEach (function () {
		fs.existsSync.restore ();
	});

	it ('should return absolute path', function () {
		assert.equal (root + file_name, fileManager.absolute(file_name));
	});

	it ('should check if folder exists', function () {
		assert.ok(fileManager.exists (file_name));
	});

	it ('should check if folder contains geometries', function () {
		sinon.stub(fs, 'readdirSync', function (path) {
			return new Array (1);
		});

		assert.ok(fileManager.hasGeometries (file_name, 0));

		fs.readdirSync.restore ();
	});

	it ('should check if directory is empty', function () {
		sinon.stub(fs, 'readdirSync', function (path) {
			return new Array (0);
		});

		assert.ok(fileManager.isEmpty (file_name));

		fs.readdirSync.restore ();
	});

	it ('should read a file\'s content', function () {
		sinon.stub(fs, 'readFileSync', function (a, b) {
			return fileContentMock;
		});

		assert.equal(fileManager.read (file_name), fileContentMock);

		fs.readFileSync.restore ();
	});

	it ('should list directory\'s content', function () {
		sinon.stub(fs, 'readdirSync', function (a, b) {
			return floorPlansMock;
		});

		assert.equal(fileManager.list (file_name), floorPlansMock);

		fs.readdirSync.restore ();
	});

});