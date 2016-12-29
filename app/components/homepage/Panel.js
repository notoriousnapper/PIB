var React = require('react');
var ReactRouter = require('react-router');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Panel = React.createClass({
        getInitialState: function(){
          return {
            panelData: [
                  {
                    title: "The Adventures of Class 196",
                    description: "The Adventures of Class 196",
                    img: "../public/img/carousel_4.jpg",
                    hook: "class"
                  },
                  {
                    title: "MakerFaire & Showcase",
                    description: "The Adventures of Class 196",
                    img: "../public/img/makerfairesd.jpg",
                    hook: "makerfaire"
                  },
                  {
                    title: "Goofy Projects",
                    description: "A Curated selection of cool projects",
                    img: "../public/img/carousel_2.jpg",
                    hook: "magic"
                  },
                  {
                    title: "ECE Department Explosion",
                    description: "Students run the place - MakerSpace",
                    img: "../public/img/carousel_3.jpg",
                    hook: "ece"
                  }
            ]
          }
        },
        render: function(){
          var list = this.state.panelData.map(function(item){
            return (
              <Link to={"/content/" + item.hook } style={{
                backgroundColor: "black",
                padding: "65px 5px 15px 5px", flex:"1", width: "24%", height: "100%"}} >
                <div style={{backgroundColor: "white", padding: "15px 5px 15px 5px", flex:"1", height: "500px"}} >
                  <img style={{width:"100%", height: "300px"}} src={item.img}></img>
                  <div style={{padding: "5px 80px 5px 80px", textAlign: "center"}}>
                      <h2 style={{color: "black"}}> {item.title} </h2>
                  </div>
                      <p> {item.description} </p>
                </div>
              </Link>
            );
          });

        return(
        		<div style={{ position: "absolute", display: "flex", width:"100%", height: "200px", backgroundColor: "black", padding: "0px 50px 0px 50px"}}>

              <div style={{color:"white"}}> {"What's New"}</div>


              {list}
    				</div>
              )
                }
});
module.exports = Panel;
