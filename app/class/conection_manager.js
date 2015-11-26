var ROUTER = function (connection) {
    var events = [];

    connection.on('message', function (message) {
        if (message.type === 'utf8')
            dispatch(JSON.parse(message.utf8Data));
    });

    connection.on('close', function (data) {
        for (var i = 0; i < events.length; i++)
            if (events [i].n == 'close') events [i].fn (data);
    });

    var dispatch = function (data) {
        for (var i = 0; i < events.length; i++)
            if (events [i].n == d.endPoint) events [i].fn (data);            
    }

    this.addEventListener = function (n, fn) {
        events.push ({n: n, fn: fn});
    }

    this.send = function (d, clb) {
        try {
            connection.send( lzstring.compressToEncodedURIComponent(JSON.stringify(d)), function (err) {
                if (err) LOGGER.error (err);
                if (clb) clb ();
            });
        } catch (err) {
            //LOG.error (err);
        }
    }

    this.error = function (c, m) {
        this.send ({ endPoint: CONSTANTS.EP.ERROR, code: c, msg: m});
    }

    this.events = function () {
        return events;
    }

}

module.exports = ROUTER;