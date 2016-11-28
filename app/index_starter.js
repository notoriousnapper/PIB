/* Crazy Flavors */

var app = document.getElementById('app');
app.innerHTML ='Hello!'

var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
        render: function(){
                        var name = 'Jesse'
        var friends =['Noone', 'Noone#2', 'Noone#3']
            return(
                <div> <h3> Name: {name} </h3>
                <ShowList names={friends}/>
                </div>
            )
        }
});

var ShowList = React.createClass({
        render: function(){
          var listItems = this.props.names.map(function(friend){
                  return <li> {friend} </li>;
        });
          return (
                  <div>
                    <h3> Friends </h3>
                    <ul>
                        {listItems}
                    </ul>
                  </div>
                )
        }
});

var HelloWorld = React.createClass({
  render: function(){
        return (
          <div> Hello, this is {this.props.name} </div>
        )

  }
})

ReactDOM.render(
    <div><HelloWorld name="Jesse"/><Parent /> </div>,
    document.getElementById('app')
);
