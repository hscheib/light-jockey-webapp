var React = require('react');

var LightJockeyActions = require('../actions/lightJockeyActions.js');
var LightJockeyStore = require('../stores/lightJockeyStore.js');
var NavBar = require('./navbar.jsx');
var HueLight = require('./hueLight.jsx');


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
        var rows = [];
        var lightCount = 0;
        var reachableLights = [];
        if (hueState) {
            for (i in hueState) {
                if (hueState[i].state.reachable) {
                    lightCount++;
                    reachableLights.push(hueState[i]);
                    rows.push(<HueLight key={hueState[i].hue + i} lightId={i} light={hueState[i]}/>);
                }
            }
        }

        return (
            <div>
                <NavBar/>
                <div className="ui grid container">
                    <div className="four wide column">
                        <h2 className="ui center aligned header">All Lights ({lightCount})</h2>
                        {rows}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Root;
