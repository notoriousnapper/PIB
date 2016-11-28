var React = require('react');



var TextComponent = React.createClass({
    render: function(){
    var message = this.props.message;
    return (
            <div style={ this.props.style}>{message} </div>
            )
            }
});

module.exports = TextComponent;