 // To get started with this tutorial running your own code, simply remove
 //      the script tag loading scripts/example.js and start writing code here.


      var ImageComponent = React.createClass({



        render: function(){
          return 
            (<img src={this.props.src}>
            );
        }
      });


      ReactDOM.render(
          <ImageComponent src="public/img/imageComponent.png" />, 
        document.getElementById('images');
      );