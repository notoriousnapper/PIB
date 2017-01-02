var React  = require('react');
var Footer = React.createClass({
  render: function(){
    return (
        <div id="footer" style={{margin: "0px", padding: "0px", borderTopWidth:"20px", }}>
          <div style={{
            display: "flex", height:"300px", backgroundColor: "#1a2930", margin: "auto", textAlign:"left", color: "white"}}>
            <div style={{flex:"1"}}> </div>
              <div style={{ flex:"1", margin: "auto", textAlign:"left"}}>
                <div style={{
                    fontWeight: "bold", fontSize: "20px"}}> Contact  </div>
                <div> <br /> Jesse Ren <br/> Web Master <br/> jeren.neurogen@gmail.com <br/> 858-847-5518 </div>
              </div>

              <div style={{flex:"1", margin: "auto"}}>
                <div style={{fontWeight: "bold", fontSize: "20px"}}> University and Corporate  </div>
                <div> <br /> Professor Truong Nguyen <br/> Chair of Electrical and Computer Engineering
                   <br/> tqn001@ucsd.edu <br/> 858-822-5554 </div>
              </div>

            <div style={{flex:"1"}}> </div>
          </div>
          <section>
            <ul id='services'>
              <li>
                <div className='entypo-twitter'></div>
                <span>Twitter</span>
              </li>
              <li>
                <div className='entypo-gplus'></div>
                <span>Google Plus</span>
              </li>
              <li>
                <div className='entypo-linkedin'></div>
                <span>LinkedIn</span>
              </li>
            </ul>
          </section>

        </div>
    )

  }
});
              /* FB button error rn */
              // <li>
              //   <div classNameName='entypo-facebook'></div>
              //   <span>Facebook</span>
              // </li>

module.exports = Footer;
