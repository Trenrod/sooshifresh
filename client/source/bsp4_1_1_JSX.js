var React = require('react');
var ReactDOM = require('react-dom');

/*
 * h1 | h6
 * button
 */

var ReactClassHeader = React.createClass({
	render : function(){
		
		if(this.props.isHidden){
			return (
				<h6>{this.props.textToHide}</h6>
			);
		}else{
			return (
				<h1>{this.props.textToHide}</h1>	
			);
		}
	}
});
 
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
		return (
			<div>
				<ReactClassHeader isHidden={this.state.isHidden} textToHide={this.props.textToHide} />
				<a className='btn btn-default' onClick={this.handleClick} >'Toggle header'</a>
			</div>			
		);
	}
});

var reactComponentElement = React.createElement(ReactClass, { textToHide : 'Please hide me!'}); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
