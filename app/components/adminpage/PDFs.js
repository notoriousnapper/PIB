import React, { Component } from 'react';
import sha1 from 'sha1'
import superagent from 'superagent'

let S = {
    fileInput: {
        width: "0.1px",
        height: "0.1px",
        opacity: "0",
        overflow: "hidden",
        position: "absolute",
        zIndex: "-1"
    }
}

class Pdfs extends Component {
    constructor(prop){
        super(prop)
        this.state = {
            pdfs: []
        }
    }
    uploadFile(event){
        let file = document.getElementById('myFile').files[0];
        console.log(file);
        const cloudName = "dgs4woesz";
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
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
        uploadRequest.attach('file', file);
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
            let updatedPdfs = Object.assign([], this.state.pdfs);
            updatedPdfs.push(uploaded);
            this.setState({ //setState is like refresh, react will rerender
                pdfs: updatedPdfs
            });
        });

    }
    render(){
        // const list = this.state.pdfs.map((pdf, i) => {
        //     return(
        //         <li key={i}>
        //             <img style={{width:72}} src={image.secure_url} />
        //             <a id={i} onClick={this.removeImage.bind(this)} href="#">remove</a>
        //         </li>
        //     )
        // });
        return(
            <section>
                <label className="custom-file">
                    <input type="file" id="myFile" name="myFile" onChange={this.uploadFile.bind(this)}/>
                </label>
            </section>
        )
    }
}
module.exports = Pdfs;