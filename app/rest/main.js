var app = express();
var server = app.listen(CONFIG.PORT, function () {});

//Interceptors
app.all(CONSTANTS.ROUTES.ALL, REQUEST.setHeaders);
app.all(CONSTANTS.ROUTES.NRA, AUTHENTICATOR.ip);
app.post(CONSTANTS.ROUTES.FOLDER, bodyParser.raw(), folder_controller.valid_id);

//POST
app.post(CONSTANTS.ROUTES.FOLDER, bodyParser.raw(), folder_controller.create_folder);

module.exports = server;