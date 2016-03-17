var React = require('react');
var Color = require("color")
var LightJockeyActions = require('../actions/lightJockeyActions.js');

var HueLight = React.createClass({
    handleClick: function (a) {
        LightJockeyActions.setLightId(this.props.lightId);
    },
    render: function () {
        var light = this.props.light;
        var hue = light.state.hue / 65000;
        var sat = light.state.sat / 255;
        var bri = light.state.bri / 255;
        var myColor = Color().hsl(hue * 360, sat * 100, bri * 100);

        var rgb = myColor.rgb();

        return (


            <div className="ui cards">
                <div onClick={this.handleClick.bind(this, light.name)} className="card pointer">
                    <div className="content">

                        <div className="ui middle aligned grid">


                            <div className="two wide column">
                                <i style={{ color: "rgb("+rgb.r+","+rgb.g+","+rgb.b+")" }}
                                   className="idea icon big"></i>
                            </div>
                            <div className="twelve wide column">
                                {light.name}
                            </div>
                        </div>


                    </div>

                </div>

            </div>




        );
    }
});

module.exports = HueLight;
