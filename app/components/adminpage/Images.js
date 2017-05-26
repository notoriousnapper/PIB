import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

const mainPicBackgroundDefault = "http://res.cloudinary.com/dgs4woesz/image/upload/v1495083168/add_y3vqaa.png";

let S = {
    dropStyle: {
        width: 80,
        height: 80,
        border: "solid 1px #000"
    },
    imagePosition: {
        display: "block",
        margin: "auto",
        width: "80%",
        paddingTop: "9px",
        opacity: "0.5"
    }
};

class Images extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    }

    uploadFile(files){
        console.log('uploadFile: ');
        console.log(files);
        //prepration for uploading http
        const image = files[0];
        const cloudName = "dgs4woesz";
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const timestamp = Date.now()/1000;
        const uploadPreset = "xi0vwkpw";
        const apiSecret = 'bKmEVOd7vz_r2RELMcX_I4z1QKM';
        //preset and secret next to each other!
        const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${apiSecret}`;
        const signature = sha1(paramsStr); //convert parameter include a sha1 signature (from of security)
        const params = {
            'api_key': '619485956988576',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
        //using superagent make http post request (axios is also good)
        let uploadRequest = superagent.post(url);
        //please upload this file, and cloudnary request to name your file 'file'...
        uploadRequest.attach('file', image);
        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key]);
        })
        uploadRequest.end((err,resp) => {
            if(err){
                alert(err);
                return;
            }
            //return JSON from cloudnary
            console.log('upload Complete: '+JSON.stringify(resp.body));
            const uploaded = resp.body;
            let updatedImages = Object.assign([], this.state.images);
            updatedImages.push(uploaded);
            this.setState({ //setState is like refresh, react will rerender
                images: updatedImages
            });
            //Pass the uploaded image file back to parent
            this.props.onUpload(updatedImages[0].secure_url);
        });
    }

    removeImage(event){
        event.preventDefault()
        console.log('removeImage: '+event.target.id);
        let updatedImages = Object.assign([], this.state.images);
        updatedImages.splice(event.target.id, 1);
        this.setState({ //setState is like refresh, react will rerender
            images: updatedImages
        });
    }

    render(){
        const list = this.state.images.map((image, i) => {
            return(
                <li key={i}>
                    <img style={{width:72}} src={image.secure_url} />
                    <a id={i} onClick={this.removeImage.bind(this)} href="#">remove</a>
                </li>
            )
        });
        return(
            <section>
                <Dropzone onDrop={this.uploadFile.bind(this)} style={S.dropStyle}>
                    <img src="http://res.cloudinary.com/dgs4woesz/image/upload/v1495083168/add_y3vqaa.png"
                         style={S.imagePosition}
                    ></img>
                </Dropzone>
                <ol>
                    { list }
                </ol>
            </section>
        )
    }
}
module.exports = Images;