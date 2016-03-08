var React = require('react');

var MenuGroupItem = require('./MenuGroupItem.react');

var MenuGroup = React.createClass({

	render : function(){
		
		var menuGroupItemElements = null;
		if(this.props.menuGroup.items){
			menuGroupItemElements = this.props.menuGroup.items.map(function(menuGroupItem){
				return <MenuGroupItem item={menuGroupItem} key={menuGroupItem.title} />;
			});
		}

		
		var table = null;
		if(this.props.menuGroup.priceTable){
			var rows = this.props.menuGroup.priceTable.map(function(priceTable){
				return (
					<tr key={priceTable[0]}>
						<td>{priceTable[0]}</td>
						<td>{priceTable[1]}</td>
						<td>{priceTable[2]}</td>
					</tr>
				)
			});
			
			table = (
				<table className="table">
					<tbody>
						<tr>
							<th></th>
							<th>take away</th>
							<th>im store</th>
						</tr>
						{rows}
					</tbody>
				</table>
			);
		}
		

		
		return (
			
			<div className="panel panel-primary" >
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.menuGroup.title}</h3>
				</div>
   				<div className="panel-body">
					{menuGroupItemElements}
				</div>
				{table}
				<div className="panel-footer">
					Dazu servieren wir (u.a. glutenfreie) Sojasoße mit Wasabi sowie leckere Dips wie bspw. Bayerischen Süßen Senf und rauchige BBQ Soße.
				</div>
			</div>
		)
	} 
});

module.exports = MenuGroup;