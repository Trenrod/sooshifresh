var React = require('react');
var ReactDOM = require('react-dom');

/*
 * h1 | h6
 */

var ReactClass = React.createClass({
	getInitialState : function() {
		return {
			isHidden : false
		}
	},
	
	render: function () {
		if(this.props.hideMe && this.props.hideMe === true){
			this.state.isHidden = true;
		}
		
		if(this.state.isHidden){
			return React.createElement('h6', { key: 'headline1' }, 'Now you can\'t. Hihi!');
		}else{
			return React.createElement('h1', { key: 'headline1' }, 'You can see me!');
		}
	}
});

//var reactComponentElement = React.createElement(ReactClass, {hideMe : true}); 
var reactComponentElement = React.createElement(ReactClass); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
