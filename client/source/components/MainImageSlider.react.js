var React = require('react');
var Slider = require('react-slick');

var MainImageSlider = React.createClass({
	render: function () {
		var settings = {
			dots: true,
			slidesToShow: 1,
			speed: 1000,
			arrows : false,
			adaptiveHeight : false,
			fade : true
		};

		return (
			<Slider {...settings}>
				<div><img src="/img/butterfly.jpg" className="img-responsive center-block"/></div>
				<div><img src="/img/city.jpg"  className="img-responsive center-block"/></div>
				<div><img src="/img/desert.jpg"  className="img-responsive center-block"/></div>
			</Slider>
		);
	}
});

module.exports = MainImageSlider;
