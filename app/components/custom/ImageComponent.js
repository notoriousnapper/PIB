var React = require('react');
var ReactDOM = require('react-dom');

var ImageComponent = React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  },

  componentDidMount: function() {
     // Get the components DOM node
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        // Now set a transition on the opacity
        elem.style.transition = "opacity 1050ms"; // Is this asynchronous?
        // and set the opacity to 1

        elem.style.opacity = 1;
    });
  },

  render: function() {
    // console.log ("url that was rendered was: " + this.props.url);
    return <img src={this.props.url} ref="img" style={this.props.style} />;
  }
});


module.exports = ImageComponent;
