//Vendor
WebSocketServer = require('websocket').server;
http = require('http');
fs = require('graceful-fs');
async = require('async');
express = require('express');
bodyParser = require('body-parser');
mkdirp = require('mkdirp');

//Config
CONSTANTS = require ('./app/config/constants');
ERROR = require ('./app/config/error');
CONFIG = require ('./app/config/config');
REQUEST = require ('./app/rest/config/request');

//Util
LOG = require ('./app/util/logger');

//Static
AUTHENTICATOR = require ('./app/class/authenticator');
FileManager = require ('./app/class/file_manager');
ROUTER = require ('./app/socket/util/router');

//Socket Controller
Controller2D = require ('./app/socket/controller/Controller2D');
Controller3D = require ('./app/socket/controller/Controller3D');
ControllerSession = require ('./app/socket/controller/ControllerSession');

//Error Handling
EXCEPTION_HANDLER = require ('./app/socket/error/exception_handler');
Interceptor = require ('./app/socket/error/interceptors');

//Client
SocketClient = require ('./app/socket/SocketClient');

//Rest Controller
folder_controller = require ('./app/rest/controllers/folder');

//MAIN
SERVER = require ('./app/rest/main');
SOCKET = require ('./app/socket/main');