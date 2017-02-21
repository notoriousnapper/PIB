var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Detail = React.createClass({

  getInitialState: function(){
    return {
    }
  },
  componentDidMount: function() {
  },
  render: function(){
    var boxStyle = {
      flex: "1", float: "left", width: "220px", height: "440px",
      backgroundColor: "#d5cab8", padding: "10px 20px 20px 10px", margin: "0 auto",
      color: "black", borderColor:"black", borderWidth: "10px"
    };
    var featuredStyle = {
      color: "#F1C232",
      fontSize: "30px",
      textDecoration: "underline"
    };
    return (
      <div style={boxStyle}>
        <div style={{ display: "block", padding: "10px 20px 10px 20px",  backgroundColor: "#F1C232", width: "200px"}}>
          <h4 style={{color: "black", fontSize: "30px", noWrap: "normal"}}> Featuring: ArcadeBox </h4>
        </div>
        <h4 style={{fontSize: "19px", textAlign: "center"}}> Play classic games while learning programming and circuits!</h4>
        <Link style={{margin: "0 auto"}} to={"/projects/arcadebox"} >
          <button style={{borderColor:"white", backgroundColor: "Transparent", color:"white", padding: "10px 20px 10px 20px",
            height: "45px", width: "120px", fontSize: "14px", margin: "auto"}}> See Project </button>
        </Link>
      </div>
    )
  }
});

module.exports = Detail;
