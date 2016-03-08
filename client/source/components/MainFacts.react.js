var React = require('react');

var MainhFacts = React.createClass({
	render : function(){
		
		return (
			<div className="col-md-8 col-md-offset-2">
				<div className="text-center">
					<h4>Das Ulmer Original & Dein Take Away Store für Sushi</h4>
				</div>
				<div className="row">
					<div className="col-md-4">
						<img className="img-responsive center-block" src="/img/logo.jpg" />
					</div>
					<div className="col-md-8">
						<ul>
							<li>verzicht auf Konservierungs-stoffen und Geschmacksverstärkern</li>
							<li>Gluten- und laktosefrei und auch vegetarisch und vegan erhältlich</li>
							<li>frische Zutaten von hoher Qualität von lokalen Erzeugern</li>
							<li>keine kommerzielle Kette, aus Ulm, mit Ulmern für Ulm!</li>								
						</ul>
					</div>
				</div>
			</div>
		)
	} 
});

module.exports = MainhFacts;