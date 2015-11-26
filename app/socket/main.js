wsServer = new WebSocketServer({
    httpServer: SERVER
});

wsServer.on(CONSTANTS.EVT.REQUEST, SocketClient);