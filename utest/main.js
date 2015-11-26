//Vendor
expect = require ('chai').expect;
assert = require ('chai').assert;
stub = require ('chai').stub;
sinon = require ('sinon');

async = require('async');
fs = require('graceful-fs');

//App Core
CONSTANTS = require ('./../app/config/constants');
ERROR = require ('./../app/config/error');
SocketClient = require ('./../app/socket/SocketClient');
Controller3D = require ('./../app/socket/controller/Controller3D');
Controller2D = require ('./../app/socket/controller/Controller2D');
FileManager = require ('./../app/class/file_manager');
ROUTER = require ('./../app/socket/util/router');
EXCEPTION_HANDLER = require ('./../app/socket/error/exception_handler');
Interceptor = require ('./../app/socket/error/interceptors');
ControllerSession = require ('./../app/socket/controller/ControllerSession');
AUTHENTICATOR = require ('./../app/class/authenticator');

//Config
ERROR = require ('./../app/config/error');

//Mock Vendor
MockHTTPRequest = require ('./mock/mockHttpRequest');

//Mock App Core
socketClientConnectionMock = require ('./mock/socketClientConnection');
fileManagerMock = require ('./mock/fileManagerMock');
socketClientMock = require ('./mock/socketClient');

//Mock Data
configMock = require ('./mock/data/configMock');
materialsMock = require ('./mock/data/materialsMock');
floorPlansMock = require ('./mock/data/floorPlansMock');
fileContentMock = require ('./mock/data/fileContentMock');

//Spec
var normalizedPath = require("path").join(__dirname, "spec");

//Util
MessageWrapper = require ('./mock/data/messageWrapper');
LOG = require ('./../app/util/logger');

fs.readdirSync(normalizedPath).forEach(function(file) {
  require("./spec/" + file);
});