var React = require('react');

//var HueActions = require('../actions/hueActions.js');
//var HueStore = require('../stores/hueStore.js');
var NavBar = require('./navbar.jsx');


//var getStateFromStores = function () {
//    return {
//        hueState: HueStore.getHueState()
//    }
//};

var Root = React.createClass({
    //getInitialState: function () {
    //    return getStateFromStores();
    //},
    //componentDidMount: function () {
    //    HueActions.getHueState();
    //    HueStore.addChangeListener(this._onChange);
    //},
    //componentWillUnMount: function () {
    //    HueStore.removeChangeListener(this._onChange);
    //},
    //
    //_onChange: function () {
    //    this.setState(getStateFromStores());
    //},
    render: function () {

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
