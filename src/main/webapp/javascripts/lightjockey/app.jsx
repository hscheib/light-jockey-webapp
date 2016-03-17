"use strict";
var React = require('react');

var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Root = require('./components/root.jsx');

ReactDOM.render(<Router>
        <Route path="/" component={Root}/>
    </Router>,
    document.getElementById('root'));