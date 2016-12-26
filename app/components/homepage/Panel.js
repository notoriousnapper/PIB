var React = require('react');
var ReactRouter = require('react-router');


var Panel = React.createClass({
        getInitialState: function(){
          return {
            panelData: [
                  {
                    title: "The Adventures of Class 196",
                    description: "The Adventures of Class 196",
                    img: "../public/img/carousel_4.jpg"
                  },
                  {
                    title: "MakerFaire & Showcase",
                    description: "The Adventures of Class 196",
                    img: "../public/img/makerfairesd.jpg"
                  },
                  {
                    title: "The Adventures of Class 196",
                    description: "The Adventures of Class 196",
                    img: "../public/img/carousel_2.jpg"
                  },
                  {
                    title: "ECE Department Explosion",
                    description: "Students run the place - MakerSpace",
                    img: "../public/img/carousel_3.jpg"
                  }
            ]
          }
        },
        render: function(){
          var list = this.state.panelData.map(function(item){
            return (
              <div style={{backgroundColor: "#1A2930", padding: "65px 5px 15px 5px", flex:"1", width: "24%", height: "100%"}} >
                <div style={{backgroundColor: "white", padding: "15px 5px 15px 5px", flex:"1", height: "500px"}} >
                  <img style={{width:"100%", height: "300px"}} src={item.img}></img>
                  <h2 style={{color: "black"}}> {item.title} </h2>
                  <p> {item.description} </p>
                </div>
              </div>
            );
          });

        return(
        		<div style={{ position: "absolute", display: "flex", width:"100%", height: "200px", backgroundColor: "white", padding: "0px 30px 0px 30px"}}>

              {list}
    				</div>
              )
                }
});
module.exports = Panel;
