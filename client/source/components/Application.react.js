var React = require('react');
var Navbar = require('./Navbar.react');
var ListPanel = require('./ListPanel.react');
var MainFacts = require('./MainFacts.react');
var MainImageSlider = require('./MainImageSlider.react');
var Menu = require('./menu/Menu.react');

var elemcmp = require('./elementComponents');


var styleDivMarginTop = {
	marginTop : 60,
}

var styleDivMarginMiddle = {
	marginTop : 20,
}

var Application = React.createClass({

	getInitialState(){
		return (
			{
				showComponents : elemcmp.ELEM_MAINIMAGE_SLIDER | elemcmp.ELEM_MAIN_FACTS | elemcmp.ELEM_MENU 
			}
		);
	},

	showComponentsUpdate(showComponents){
		this.setState(
			{
				showComponents : showComponents
			}
		);
	},

	//Initial
	render : function(){
		
		var showComponents = [];
		if(this.state.showComponents & elemcmp.ELEM_MAINIMAGE_SLIDER){
			showComponents.push(
				<div  className="container" style={styleDivMarginMiddle} key="ELEM_MAINIMAGE_SLIDER">
					<MainImageSlider />
				</div>
			);
		}
		if(this.state.showComponents & elemcmp.ELEM_MAIN_FACTS){
			showComponents.push(
				<div className="container" style={styleDivMarginMiddle} key="ELEM_MAIN_FACTS">
					<MainFacts />
				</div>
			);
		}
		if(this.state.showComponents & elemcmp.ELEM_MENU){
			showComponents.push(
				<div className="container" style={styleDivMarginMiddle} key="ELEM_MENU">
					<Menu source="http://localhost:8080/data/menu.json" />
				</div>
			);
		}
		
		return (
			<div className="container">
				<Navbar showComponentsUpdate={this.showComponentsUpdate} />
				<div style={styleDivMarginTop} key="NAV_DIS" />
				{showComponents}
			</div>
		);
	}
});

module.exports = Application;
