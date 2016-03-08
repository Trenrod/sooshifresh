var React = require('react');
var ReactDOM = require('react-dom');

/*
 * ul
 * ->li
 * ->li
 * ->li
 */

var listItemElement1 = React.createElement('li', { key: 'item1' }, 'Item 1');
var listItemElement2 = React.DOM.li({ key: 'item2' }, 'Item 2'); 
var listItemElement3 = React.DOM.li({ key: 'item3' }, 'Item 3'); 

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

//Alternativ var listOfItems = React.DOM.ul({ className: 'list-ofitems' }, reactFragment);
var listOfItems = React.createElement('ul', { }, reactFragment);

ReactDOM.render(listOfItems, document.getElementById('react-application'));
