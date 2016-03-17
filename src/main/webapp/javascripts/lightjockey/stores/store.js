var Constants = require('../constants');
var EventEmitter = require('events');
var _ = require('lodash');

var Store = _.assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(Constants.CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(Constants.CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback);
    }
});

module.exports = Store;
