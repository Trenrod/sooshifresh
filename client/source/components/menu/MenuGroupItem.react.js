var React = require('react');

var MenuGroupItem = React.createClass({
	render : function(){

		var variationElement = this.props.item.variations.map(function(variation){
			return (
				<li key={variation.title}>
					<b>{variation.title} </b>{variation.ingrediants}
				</li>
			);
		});

		return (
			<div className="row">
				<div className="col-md-4">
					<img className="img-responsive center-block" src={this.props.item.image} />
				</div>
				<div className="col-md-8">
					<h4>{this.props.item.title}</h4>
					<ul>
						{variationElement}
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = MenuGroupItem;