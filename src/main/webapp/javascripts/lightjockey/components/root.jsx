var React = require('react');

var LightJockeyActions = require('../actions/lightJockeyActions.js');
var LightJockeyStore = require('../stores/lightJockeyStore.js');
var NavBar = require('./navbar.jsx');


var getStateFromStores = function () {
    return {
        hueState: LightJockeyStore.getHueState()
    }
};

var Root = React.createClass({
    getInitialState: function () {
        return getStateFromStores();
    },
    componentDidMount: function () {
        LightJockeyActions.getHueState();
        LightJockeyStore.addChangeListener(this._onChange);
    },
    componentWillUnMount: function () {
        LightJockeyStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState(getStateFromStores());
    },
    render: function () {
        console.log(this.state);
        return (
            <div>
                <NavBar/>
                <div className="ui grid container">

                </div>
            </div>
        );
    }
});

module.exports = Root;
