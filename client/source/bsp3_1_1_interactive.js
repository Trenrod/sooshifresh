var React = require('react');
var ReactDOM = require('react-dom');

/*
 * h1 | h6
 * button
 */
 
var ReactClass = React.createClass({
	getInitialState : function() {
		return {
			isHidden : false
		}
	},

	handleClick : function(){
		this.setState({
			isHidden : !this.state.isHidden
		});
	},
		
	render: function () {
		var headTextElement = "";
		if(this.state.isHidden){
			headTextElement = React.createElement('h6', { key: 'headline1' }, this.props.textToHide);
		}else{
			headTextElement = React.createElement('h1', { key: 'headline1' }, this.props.textToHide);
		}
		
		var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggle header');
		var fragment = [headTextElement, buttonElement];
		return React.createElement('div', {}, fragment);
	}
});

var reactComponentElement = React.createElement(ReactClass, { textToHide : 'Please hide me!'}); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
