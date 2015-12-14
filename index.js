import HelloWorld from "./components/HelloWorld";
var HelloJsx = require("./components/HelloJsx");
var React = require('react');
var ReactDom = require('react-dom');
ReactDom.render(<HelloJsx />, document.getElementById('content'));
alert(12345);
