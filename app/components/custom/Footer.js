var React  = require('react');
var Footer = React.createClass({
  render: function(){
    return (
      <div style={{
        borderWidth: "5px 0 0 0 ", borderTopColor: "black", borderStyle:"solid",
         width:"100%", padding: "20px", height: "100px",
        backgroundColor: "white",  zIndex: "1", position: "absolute",
        marginTop:"700px", height: "600px"
      }}>
        <img src="../../public/img/ucsdfont.png" />
        <div> UCSD 858-847-5518 </div>
        <div> Contact: jeren.neurogen@gmail.com for inquiries </div>
      </div>
    )

  }
})

module.exports = Footer;
