var React = require('react');
var ReactDOM = require('react-dom');

var ApplicationClass =  require('./components/Application.react');

var applicationElement = React.createElement(ApplicationClass);

ReactDOM.render(applicationElement, document.getElementById('react-application'));
