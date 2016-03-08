var React = require('react');

var MenuGroup = require('./MenuGroup.react');

var Menu = React.createClass({
	getInitialState : function(){
		return (
			{
				menugroups : []
			}
		)
	},

	componentDidMount: function() {
		this.serverRequest = $.get(this.props.source, function (result) {
			var menuData = result;
			this.setState({
				menugroups : menuData
			});
		}.bind(this));
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render : function(){
				
		var menuGroupElements = this.state.menugroups.map(function(menuGroup){
			return (
				<MenuGroup menuGroup={menuGroup} key={menuGroup.title} />
			);
		});
		
		return (
			<div className="col-md-8 col-md-offset-2">
				{menuGroupElements}
			</div>
		)
	} 
});

module.exports = Menu;

