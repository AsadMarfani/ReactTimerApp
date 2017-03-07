var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Timer = require('Timer');
var Countdown = require('Countdown');
var Main = require('Main');

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load Custom CSS
require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
    <Router history = {hashHistory}>
    	<Route path = '/' component = {Main}>
			<IndexRoute component = {Timer}></IndexRoute>
			<Route path = "countdown" component = {Countdown}></Route>
    	</Route>
    </Router>,
    document.getElementById('app')
);
