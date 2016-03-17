var Constants = require('../constants');
var Dispatcher = require('../dispatcher/dispatcher');
var request = require('superagent');
var Color = require("color")

var lightId = 1;

var dispatchError = function (error, action) {
    Dispatcher.dispatch({
        action: action,
        error: error
    });
};

var hasError = function (err, res) {
    return err || res.status >= 400;
};


var getError = function (err, res) {
    if (err) {
        return err;
    }
    return {
        message: 'There was a problem with the server.'
    };
};

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var setLightId = function(id) {
    lightId = id;
}
var LightJockeyActions = {
    setLightId: function(id){
       setLightId(id);
    },
    changeColor: function (c) {
        Dispatcher.dispatch({
            action: Constants.UPDATE_HUE
        });

        var hue = getRandomInt(0, 65000);
        var myColor = Color(c);

        var hslString = myColor.hslString().split(",");
        var hue2 = hslString[0].slice(4);
        var sat = hslString[1].slice(0, -1);
        var bri = hslString[2].slice(0, -2);


        var huePercent = hue2 / 360;
        var satPercent = sat / 100;
        var briPercent = bri / 100;

        hue = Math.round(65000 * huePercent);
        sat = Math.round(255 * satPercent);
        bri = Math.round(255 * briPercent);

        request
            .put("http://192.168.1.130/api/210b0eea1366f719644ef2e2307c1923/lights/"+lightId+"/state")
            .set('Accept', 'application/json')
            .send({on: true, hue: hue, bri: bri, sat: sat, transitiontime: 1})
            .end(function (err, res) {
                if (hasError(err, res)) {
                    console.log("error");
                    dispatchError(getError(err, res), Constants.UPDATE_HUE_FAILED);
                    return;
                }

                var json = "";
                var json = JSON.parse(res.text);
                json = json;

                Dispatcher.dispatch({
                    action: Constants.UPDATE_HUE_SUCCESS,
                    json: json
                });

            });
        this.getHueState();



    },
    getHueState: function () {
        Dispatcher.dispatch({
            action: Constants.GET_HUE
        });


        request
            .get("http://192.168.1.130/api/210b0eea1366f719644ef2e2307c1923/lights/")
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if (hasError(err, res)) {
                    console.log("error");
                    dispatchError(getError(err, res), Constants.GET_HUE_FAILED);
                    return;
                }

                var json = "";
                var json = JSON.parse(res.text);
                json = json;

                Dispatcher.dispatch({
                    action: Constants.GET_HUE_SUCCESS,
                    json: json
                });


            });



    }

};

module.exports = LightJockeyActions;
