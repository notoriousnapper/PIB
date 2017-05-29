var React = require('react');
var ReactRouter = require('react-router');
var Images = require('./Images');
var Pdfs = require('./Pdfs');
var $ = require('jquery');
const useUrl = 'http://localhost:3000';
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
        this.state = {
            uploadedImageUrl: "",
        };
    }
    submitForm(event){
        event.preventDefault();
        if( this.refs.projectTitle.value.length === 0){
            alert("Project Title can't not be empty");
            return;
        }
        if(this.refs.owner.value.length === 0){
            alert("Author/Owner can't not be empty");
            return;
        }
        if(this.refs.team.value.length === 0){
            alert("Team name can't not be empty");
            return;
        }
        if( this.refs.description.value.length === 0){
            alert("Project Description can't not be empty");
            return;
        }
        let data = {
            name: this.refs.projectTitle.value,
            about: this.refs.description.value,
            thumbnail_img: this.state.uploadedImageUrl || '',
            tags: ['some project'],
            author: this.refs.owner.value,
            team: this.refs.team.value,
            imgArray: [],
            pdfFiles: [],


            authorImg: this.state.uploadedImageUrl || '',
            url: this.state.uploadedImageUrl || '',
        };
        console.log(data);
        this.createProject(data);
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({projectTitle: event.target.value});
    }
    createProject(data){
        console.log("creating project");
        $.ajax({
            type: "POST",
            url: useUrl + '/admin/project',
            cache: false,
            data: data,
            success: function() {
                console.log("successful");
                location.reload();
                // window.location.replace(`${useUrl}/#/admin`);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(useUrl, status, err.toString());
            }.bind(this)
        });
    }

    handleChildUpload(uploadedImageUrl){
        console.log("handle child upload method being called");
        console.log(uploadedImageUrl);
        this.setState({
            uploadedImageUrl: uploadedImageUrl
        });
    };

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
                        <Images onUpload={this.handleChildUpload.bind(this)} uploadedImageUrl={this.state.uploadedImageUrl}/>
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


