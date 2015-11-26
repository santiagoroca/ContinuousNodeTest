var MockHTTPRequest = function () {

	this.accept = function () {

		return new function () {
			var events = [];

			this.on = function (route, fn) {
				events.push ({route: route, fn: fn });
			}

			this.force = function (route, data) {
				dispatch (route, MessageWrapper.wrap(data));
			}

			this.forceMessage = function (data) {
				this.force ('message', data);
			}

			var dispatch = function (route, data) {
		        for (var i = 0; i < events.length; i++) {
		            if (events [i].route == route) {
		                events [i].fn (data);
		            }
		        }
		    }
		}

	}

}

module.exports = MockHTTPRequest;