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

class ProjectEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uploadedImageUrl: "",
            imageArr: [],
            pdfFiles: []
        };
    }

    submitForm(event){
        console.log(this.props.data);
        console.log("printing name");
        console.log(this.props.data.name);
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
            "newdataProject": {
                name: this.refs.projectTitle.value,
                about: this.refs.description.value,

                carouseFiles: '',
                tags: ['some project'],
                author: this.refs.owner.value,
                team: this.refs.team.value,
                url: this.state.uploadedImageUrl || this.props.data.url,
                imgArray: this.state.imageArr || [],
                pdfFiles: this.state.pdfFiles || [],
                authorImg: this.state.uploadedImageUrl || '',
                thumbnail_img: this.state.uploadedImageUrl || '',
            }
        };
        console.log(data);
        this.updateProject(data);
    }

    updateProject(data){
        console.log("updating project");
        $.ajax({
            type: "PUT",
            url: `${useUrl}/admin/project/${this.props.data._id}`,
            dataType: 'json',
            cache: false,
            data: data,
            success: function() {
                console.log("successful updated");
                location.reload();
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
                        <input type="text" className="form-control"  id="name" value={this.props.data.name}
                               onChange={this.props.onInputChangeForEditForm}  ref="projectTitle"/>
                    </div>
                    <div className="form-group">
                        <label>Owner: </label>
                        <input type="text" className="form-control" id="author" value={this.props.data.author}
                               onChange={this.props.onInputChangeForEditForm} ref="owner"/>
                    </div>
                    <div className="form-group">
                        <label>Team: </label>
                        <input type="text" className="form-control" id="team" value={this.props.data.team}
                               onChange={this.props.onInputChangeForEditForm} ref="team"/>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Main Picture: </label>
                        <img src={this.props.data.url} style={{width:72}}/>
                        <Images onUpload={this.handleChildUpload.bind(this)} uploadedImageUrl={this.state.uploadedImageUrl}/>
                        <p>Drop your main picture in here</p>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Project Description</label>
                        <textarea className="form-control" rows="3" ref="description" id="about" value={this.props.data.about}
                                  onChange={this.props.onInputChangeForEditForm}
                        ></textarea>
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
module.exports = ProjectEditForm;


