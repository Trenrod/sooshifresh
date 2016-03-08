var React = require('react');
var ReactDOM = require('react-dom');

/*
 * h1 | h6
 * button
 */

var ComponenteA = React.createClass({
	
	updateDataBlock : function(block, data){
		this.state.data[block] = data;
		this.setState(
			{
				data : this.state.data
			}
		);
	},
	
	getInitialState : function(){
		return {
			 data : this.props.data
		};
	},
	
	render : function(){
		return (
			<div>
				<h1>CompA Data: {this.state.data.blockA}</h1>
				<ComponenteB data={this.state.data} updateDataBlock={this.updateDataBlock} />
			</div>
		);
	}
});

var ComponenteB = React.createClass({
	handleClick : function(){
		this.props.updateDataBlock('blockB', this.props.data.blockB + 'X');
	},

	render : function(){
		return (
			<div>
				<h1>CompB Data: {this.props.data.blockB}</h1>
				<a className='btn btn-default' onClick={this.handleClick} >'Toggle header'</a>
			</div>
		);
	}
});

var reactComponentElement = React.createElement(ComponenteA, { data : { blockA : "DATA_A", blockB : "DATA_B" } } ); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
