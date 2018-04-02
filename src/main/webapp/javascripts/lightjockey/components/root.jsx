var React = require('react');
var ColorPicker = require('react-color-picker')

var LightJockeyActions = require('../actions/lightJockeyActions.js');
var LightJockeyStore = require('../stores/lightJockeyStore.js');
var NavBar = require('./navbar.jsx');
var HueLight = require('./hueLight.jsx');
var Splash = require('./splash.jsx');
var Controller = require('./controller.jsx');


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

        var hueState = this.state.hueState;


        var page;
        if(hueState){
            page = <Controller hueState={hueState}/>;
        } else {
            page = <Splash/>;
        }

        return (
            <div>
                <NavBar/>
                {page}
            </div>
        );
    }
});

module.exports = Root;
