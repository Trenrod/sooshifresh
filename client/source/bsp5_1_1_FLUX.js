var React = require('react');
var ReactDOM = require('react-dom');
var DataBlockStore = require('./stores/DataBlockStore');
var ActionCreators = require('./actions/ActionCreators');

var ComponenteA = React.createClass({
	
	updateDataBlock : function(){
		var dataBlock = DataBlockStore.getDataBlock();
		this.setState(
			{
				data : dataBlock
			}
		);
	},
	
	getInitialState : function(){
		DataBlockStore.addChangeListener(this.updateDataBlock);
		var dataBlock = DataBlockStore.getDataBlock();
		return {
			 data : dataBlock
		};
	},
	
	render : function(){
		return (
			<div>
				<h1>CompA Data: {this.state.data.blockA}</h1>
				<ComponenteB data={this.state.data} />
			</div>
		);
	}
});

var ComponenteB = React.createClass({
	handleClick : function(){
		var dataBlock = this.props.data;
		dataBlock.blockB = dataBlock.blockB + 'Y';
		ActionCreators.receiveData(dataBlock);
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

var reactComponentElement = React.createElement(ComponenteA); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
