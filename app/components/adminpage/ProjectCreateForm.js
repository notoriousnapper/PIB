var React = require('react');
var ReactRouter = require('react-router');
var Images = require('./Images');
var Pdfs = require('./Pdfs');
var $ = require('jquery');

let S = {
    containerBorder: {
        border: "1px solid #000",
        width: "100%",
        margin: "0 auto",
        padding: "30px"
    },
    mainImage: {
        width: "70px",
        height: "70px"
    },
    listImages: {
        float: "left",
        listStyle: "none",
        marginRight: "20px"
    },
    listImageItem: {
        width: "70px"
    },
    listImageContainer: {
        height: "70px",
        marginLeft: 0,
        paddingLeft: 0
    }
};

class ProjectCreateForm extends React.Component {
    constructor(props){
        super(props);
    }
    submitForm(event){
        event.preventDefault();
        console.log("projectTitle");
        console.log(this.refs.projectTitle.value);
        console.log("owner name");
        console.log(this.refs.owner.value);
        console.log("team name is");
        console.log(this.refs.team.value);
        console.log("printing this");
        console.log(this);
        console.log("lalla");
        this.print();
    }
    print(){
        console.log("this functin gets called");
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({projectTitle: event.target.value});
    }
    createProject(evt){
        console.log("button clicked");
        let tempData = {
            name: "lala",
            about: "llalalala",
            thumbnail_img: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg",
            carouseFiles: "",
            tags: ['bad prject'],
            author: "Jesse Ren",
            team: " Jesee Team",
            authorImg: "http://res.cloudinary.com/dgs4woesz/image/upload/v1495058583/noab4dkuisgspn5pyafi.jpg"
        };
        $.ajax({
            type: "POST",
            url: useUrl + '/admin/project',
            cache: false,
            data: tempData,
            success: function() {
                console.log("successful");
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    }


    render(){
        return(
            <div className="container" style={S.containerBorder}>
                <form onSubmit={this.submitForm.bind(this)}>
                    <div className="form-group">
                        <label>Project Title</label>
                        <input type="text" className="form-control" placeholder="Enter Project Title" ref="projectTitle"/>
                    </div>
                    <div className="form-group">
                        <label>Owner: </label>
                        <input type="text" className="form-control" placeholder="Enter Owner Name" ref="owner"/>
                    </div>
                    <div className="form-group">
                        <label>Team: </label>
                        <input type="text" className="form-control" placeholder="Enter Team Name" ref="team"/>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Main Picture: </label>
                        <Images/>
                        <p>Drop your main picture in here</p>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Project Description</label>
                        <textarea className="form-control" rows="3" ref="description"></textarea>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>All Pictures: </label>
                        <Images/>
                        <p>Drop pictures in here</p>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <Pdfs/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
module.exports = ProjectCreateForm;


