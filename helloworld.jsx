/*
 * The script react-bootstrap.min.js does not export "Button".
 * Instead it exports ReactBootstrap.Button.
 * Similarly for all the other ReactBootstrap components.
 */
var Button = ReactBootstrap.Button;

var myButton = React.createElement( Button, {bsStyle: "success"}, "Hello World" );

React.render( myButton, document.getElementById("targetDiv") );
