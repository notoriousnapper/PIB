var React = require('react');
var ReactDOM = require('react-dom');





var SearchComponent = React.createClass({
	getInitialState: function() {
    return {
      search: '',
      test: 1,
    };
  },
  updateSearch: function(evt){
  	var message = evt.target.value.substr(0,20);
  	console.log(message);
  	this.setState({search: message, test: this.state.test + 1});
  	 console.log("Heya" + this.state.test + this.state.search);

  },
  onQuery: function(evt){
  	var message = this.state.search;
  	this.props.callbackParent(message); // hey parent, I've changed!
  	console.log('Calling Parents!');
  	console.log(message);
  },
  handleKeyPress: function(e){
    if (e.key === 'Enter'){
      console.log('do validatel');
      this.onQuery(e);
			// this.props.onMagicClick(this.state.search);
    }
  },
  render: function() {
     var containerStyle= {
	 		borderTopRightRadius: "2em",
	 		borderTopLeftRadius: "2em",
      width:"100%",
      height:"60px",
      paddingTop: "10px",
      paddingBottom: "10px",
      display: "flex",
      margin: "0 auto",
      backgroundColor: "#1A2930"
      // boxShadow: "0px 10px 9px grey"
    };
     var buttonStyle={
            width:"150px",
            borderStyle: "none",
            display: "flex",
            backgroundColor: "#FAC129",
            paddingLeft:"12px",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            textAlign: "center",


     };
     var categoryStyle={
            width:"300px",
            display: "flex",
            backgroundColor: "#FFFFFF",
            paddingLeft:"12px",
            borderTopLeftRadius: "65px",
            borderBottomLeftRadius: "65px",
            textAlign: "center",
            borderStyle: "none"

     };
     var inputStyle={
            width:"60%",
            minWidth:"200px",
            fontSize: "20px",
            fontFamily: "Helvetica",
            paddingLeft: "10px",
            // height:"50px",
            display: "flex"

     };
    var paddingStyle = {
            height: "150px",
            width: "100%",
            paddingLeft: "-30px"

    };
    var imgStyle = {
      height: "20px",
      width: "20px"



    }
    return (
      <div style={containerStyle}>
        <div style={paddingStyle}> </div>

                    <button className={'Category'} style={categoryStyle} >
											<div style={{margin: 'auto'}}>
		                    All {'\u00A0'}
		                    <span className={'glyphicon glyphicon-chevron-down'}/>
											</div>
                   </button>

            <input style={inputStyle} type="text" value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    onKeyPress={this.handleKeyPress} />
      	            <button className='Search' style={buttonStyle} onClick={()=>{this.props.onMagicClick(this.state.search)}} >
                     <img style={imgStyle} src={'../public/img/search.png'}/>
                     </button>


        <div style={paddingStyle}> </div>
	  </div>


	);
}
});

module.exports = SearchComponent;
