

var React = require('react');
var SearchBar = require('../../components/projectlistings/SearchBar');
var Pad = require('../../components/Pad');

var Category = React.createClass({
render: function(){
		var paddingStyle = {flex: "1"
		}
		var filterBarStyle = {width: "100%", height: "50px", margin: "0 auto", display: "flex"
		}
		var filterInnerStyle = {display:"flex",  height: "100%", // //borderStyle: "solid", backgroundColor: "#E0E0E0", flex: "4.5"
		}

    var buttonStyle= {
      width: "160px"
    }

		var buttonStyle = {
			//width:"75px",
			//height:"30px",
			//verticalAlign:"middle",
			border:"0",
			borderRadius:"5px",
			padding:"5px",
			margin:"0 5px",
			backgroundColor:"#EECA47",
			boxShadow:"0 0 2px #222",
			color: "black",
			cursor: "pointer"
		}

	return (
            <div>
                  <div style={paddingStyle}> </div>
                      <div className='Buttons' style={filterInnerStyle}>

                            <a onClick={this.props.popular} style={buttonStyle}> Popular </a>
                            <a onClick={this.props.view} style={buttonStyle}> Most Views </a>

                            </div >
                            <div style={paddingStyle}> </div>
            </div>
            );

}

});

module.exports = Category;
