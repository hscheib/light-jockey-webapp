var React = require('react');
var ColorPicker = require('react-color-picker')

var LightJockeyActions = require('../actions/lightJockeyActions.js');
var LightJockeyStore = require('../stores/lightJockeyStore.js');
var NavBar = require('./navbar.jsx');
var HueLight = require('./hueLight.jsx');
var Splash = require('./splash.jsx');



var COLOR = '#2bd865';

var Controller = React.createClass({
    onDrag: function (color, c) {
        COLOR = color;
        LightJockeyActions.changeColor(color);
    },
    render: function () {

        var hueState = this.props.hueState;
        var rows = [];
        var lightCount = 0;
        var reachableLights = [];
        //console.log(hueState);
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

                <div className="ui grid container">
                    <div className="six wide column">
                        <h2 className="ui center aligned header">Choose Light Color</h2>
                        <ColorPicker value={COLOR} onDrag={this.onDrag}/>
                        <div style={{background: COLOR, width: 100, height: 50, color: 'white'}}>
                            {COLOR}
                        </div>
                    </div>
                    <div className="four wide column">
                        <h2 className="ui center aligned header">All Lights ({lightCount})</h2>
                        {rows}
                    </div>
                </div>
        );
    }
});

module.exports = Controller;
