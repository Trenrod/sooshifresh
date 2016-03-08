var React = require('react');
var ReactDOM = require('react-dom');

/*
 * ul
 * ->li
 * ->li
 * ->li
 */

var ReactClass = React.createClass({	
	render: function () {    
		var listItemElement1 = React.createElement('li', { key: 'item1' }, 'Item-Class 1');
		var listItemElement2 = React.DOM.li({ key: 'item2' }, 'Item-Class 2'); 
		var listItemElement3 = React.DOM.li({ key: 'item3' }, 'Item-Class 3'); 

		var reactFragment = ['Text Component from ReactClass', listItemElement1, listItemElement2, listItemElement3];

		var listOfItems = React.createElement('ul', { }, reactFragment);

		return listOfItems;
	}
}); 

var reactComponentElement = React.createElement(ReactClass); 
ReactDOM.render(reactComponentElement, document. getElementById('react-application'));
