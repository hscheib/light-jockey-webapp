var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants');
var Store = require('./store');
var _ = require('lodash');


var state = {name:"hue go",state:{reachable:true, hue:25000,sat:200, bri:150}};
var hueState = null;
var needKey = false;
//var hueState = [state,state];

var _error = null;

var setNeedKey = function() {
    needKey = true;
};


var setHueState = function(state) {
  hueState = state;
};

var setError = function(error) {
    // Look at this page to figure out what should happen.
    // http://visionmedia.github.io/superagent/#error-handling
    _error = error.message;
}

var LightJockeyStore = _.assign({}, Store, {
    getHueState: function() {
        return hueState;
    },
    getNeedKey: function() {
        return needKey;
    }
});

LightJockeyStore.dispatchToken = Dispatcher.register(function(payload) {
    var action = payload.action;
    var json = payload.json;
    var error = payload.error;

    switch(action) {
        case Constants.UPDATE_HUE_SUCCESS:
            LightJockeyStore.emitChange();
            break;
        case Constants.GET_HUE:
            LightJockeyStore.emitChange();
            break;
        case Constants.GET_HUE_SUCCESS:
            _error = null;
            setHueState(json)
            LightJockeyStore.emitChange();
            break;
        case Constants.NEED_KEY:
            _error = null;
            setNeedKey();
            LightJockeyStore.emitChange();
            break;
        case Constants.GET_HUE_FAILED:
            setError(error);
            LightJockeyStore.emitChange();
            break;
    }
});
module.exports = LightJockeyStore;
