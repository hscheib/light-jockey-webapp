var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var NavBar = React.createClass({
    render: function () {
        return (
            <div className="navbar blue-nav">
                <div className="ui container">
                    <Link to="/">

                        <h2 className="ui header navbar-text">
                        <i className="idea layout white icon"></i>
                        <div className="content white">
                            Light Jockey
                        </div>
                    </h2>

                    </Link>

                </div>
            </div>


        );
    }
});

module.exports = NavBar;
