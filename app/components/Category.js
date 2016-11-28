

var React = require('react');
var SearchComponent = require('../components/SearchComponent');
var Pad = require('../components/Pad');

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

	return (
            <div>
                  <div style={paddingStyle}> </div>
                      <div className='Buttons' style={filterInnerStyle}>

                            <a> Most Recent </a>
                                <Pad hw={['100%','50px']} />
                            <a> Most Popular </a>
                                <Pad hw={['100%','50px']} />
                            <a> Most Views </a>
                                <Pad hw={['100%','50px']} />

                            </div>
                            <div style={paddingStyle}> </div>
            </div>
            );

}

});

module.exports = Category;
