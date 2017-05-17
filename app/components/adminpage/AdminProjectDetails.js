var React = require('react');
var $ = require('jquery');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var prodUrl = 'https://still-forest-90731.herokuapp.com';
var cloudinary = require('cloudinary');

let S = {
    containerStyle: {
        zIndex:"1000", paddingTop: "100px", paddingLeft: "200px", paddingRight: "100px", paddingBottom: "100px", display: "flex", flexDirection: "column", height: "100%", margin: "0 auto", backgroundColor: "white"
    },
    blockStyle : {
        border: "2px solid black",  display: "flex", padding: "10px 30px", paddingBottom: "60px"
    },
    paddingStyle : {
        marginLeft: "50px", marginRight: "50px"
    },
    buttonStyle : {
        border: "2px solid black", boxShadow: "3px 3px black", padding: "0 10px"
    },
    get_file:  {
        background: "#f9f9f9",
        border: "5px solid #88c",
        padding: "15px",
        borderRadius: "5px",
        margin: "10px",
        cursor: "pointer"
    },
    my_file: {
        display: "none"
    }
};

var AdminProjectDetails = React.createClass({
    getInitialState: function() {
        return {
            clicks: 0,
            data: {}
        };
    },
    componentDidMount() {
        this.getProjects(this.props.params.id);
    },
    getProjects: function(query){
        console.log("id  " + query);
        $.ajax({
            url: '/project/' + query,
            dataType: 'json',
            cache: false,
            success: function(res) {
                this.setState({
                    data: res,
                    clicks: this.state.clicks + 1
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(prodUrl, status, err.toString());
            }.bind(this)
        });
    },
    uploadImage() {
        console.log("Button clicked");
        // cloudinary.uploader.upload("my_picture.jpg", function(result) { console.log(result) });
        $('#my_file').click();
    },
    render: function(){
        console.log(this.state.data);
        if(this.state.data){
            return(
                <div style={S.containerStyle}>
                    Admin Project Details
                    <div style={S.blockStyle}>
                        <Link to={'/admin'} style={S.buttonStyle}>Back</Link>
                        <p style={S.paddingStyle}>Project Title:
                            <span>{data.name}</span>
                        </p>
                        <p>Project Author:
                            <span>{data.author}</span>
                        </p>
                    </div>
                    <div style={S.blockStyle}>
                        <span className="pull-right">Main Pic</span>
                        <input style={S.get_file} type="button" value="Upload Image"
                               onClick={this.uploadImage}/>
                        <input type="file" id="my_file" style={S.my_file}/>
                    </div>
                    <div style={S.blockStyle}>
                        All Pics
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
});
module.exports = AdminProjectDetails;