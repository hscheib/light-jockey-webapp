var React = require('react');
var LightJockeyActions = require('../actions/lightJockeyActions.js');
var LightJockeyStore = require('../stores/lightJockeyStore.js');

var Splash = React.createClass({
    getInitialState: function () {
        return {needKey:LightJockeyStore.getNeedKey(),step1:"active",step2: "disabled", searching:"loading"}
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
    handleClick: function () {
        this.setState({step1:"completed",step2: "active", searching:""});

    },
    handleClick2: function () {

        this.setState({step2: "completed"});
        setTimeout(function(){ $('.ui.grid.container')
            .transition('horizontal flip')
        ; }, 500);


    },
    render: function () {

        if(this.state.needKey) {
            //step 2
            this.setState({step1:"completed",step2: "active", searching:""});

        }
        return (
            <div className="ui grid container">
                <div className="sixteen wide column">
                    <div className="ui two steps">
                        <div  onClick={this.handleClick} className={this.state.step1 + " step"}>
                            <i className={this.state.searching + " notched circle icon"}></i>
                            <div className="content">
                                <div className="title">Searching for Hue</div>

                            </div>
                        </div>
                        <div onClick={this.handleClick2} className={this.state.step2 + " step"}>
                            <i className="sitemap icon"></i>
                            <div className="content">
                                <div className="title">Connect to Bridge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
});

module.exports = Splash;
