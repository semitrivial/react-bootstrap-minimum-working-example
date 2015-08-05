var target = document.getElementById("targetDiv");

var errmsg = React.createElement(
  "p",
  null,
  "Error, you didn't compile .jsx to .js  ...  "
  + "See http://github.com/semitrivial/react-bootstrap-minimum-working-example"
);

React.render( errmsg, document.getElementById("targetDiv") );
