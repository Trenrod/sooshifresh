var React = require('react');
var elemcmp = require('./elementComponents');

var divStyle = {height: 0.8};

var Navbar = React.createClass({
	getInitialState : function(){
		return null;
	},
	
	showAll : function(){
		this.props.showComponentsUpdate(elemcmp.ELEM_MAINIMAGE_SLIDER | elemcmp.ELEM_MAIN_FACTS | elemcmp.ELEM_MENU);
	},
	
	onlyMenu : function(){
		console.log("CLICKED_YEAH");
		this.props.showComponentsUpdate(elemcmp.ELEM_MENU);
	},
	
	render : function(){
		return (
			<nav className="navbar navbar-default nav-justified navbar-fixed-top">
				<div className="container"> 
					<div className="navbar-header page-scroll">
						<button aria-expanded="false" className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
							<span className="sr-only">Toggle navigation</span> 
							<span className="icon-bar"></span> 
							<span className="icon-bar"></span> 
							<span className="icon-bar"></span>
						</button>
					</div>
					<div style={divStyle} aria-expanded="false" className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav nav-justified">
						<li className=""> <a className="page-scroll" href="#page-top">Home</a> </li>
						<li className=""> <a className="page-scroll" href="#about">About</a> </li>
						<li className=""> <a className="page-scroll" href="#" onClick={this.onlyMenu}>Menu</a> </li>
						<li className=""> <a className="page-scroll" href="#" onClick={this.showAll}><img src="/img/logo_text.jpg" /></a> </li>
						<li className=""> <a className="page-scroll" href="#events">Events</a> </li>
						<li className=""> <a className="page-scroll" href="#team">Team</a> </li>
						<li className=""> <a className="page-scroll" href="#contact">Contact us</a> </li>
					</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Navbar;