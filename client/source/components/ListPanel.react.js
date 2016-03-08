var React = require('react');

var ListPanel = React.createClass({	
	getInitialState : function(){
		return {
			data : [
				"test1", "test2", "test3"
			]
		};
	},
	
	getListItemElement: function (rndNum) {	
		return (
			<li key={rndNum}> { rndNum } </li>   
		);
	},
	
	render : function(){
		
		var arr = [ "XAA", "asdasd", "aslj" ];
		var listItems = arr.map(this.getListItemElement);
		
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">List Panel</h3>
				</div>
				<div className="panel-body">
					<ul>
						{ listItems }
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = ListPanel;