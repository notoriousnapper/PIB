import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import ProjectPage from './AdminProject';

export const PROJECTS_PAGE = 'Project_page',
            USER_PAGE = 'User_page',
            DATA_PAGE = 'Data_page';

let S = {
    container_background: {
        backgroundColor: "white",
    }
}

class AdminMain extends Component{
    //constructor are always get called with props
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: PROJECTS_PAGE
        }
    }
    pageChange(page) {
        this.setState({
            selectedPage:  page
        });
    }
    render(){
        return(
            <div className="container-fluid" style={S.container_background}>
                <div className="row">
                    <div className="col-md-2">
                        <AdminNavbar  onPageChange={this.pageChange}/>
                    </div>
                    <div className="col-md-10">
                        <ProjectPage />
                    </div>
                </div>
            </div>)
    }
}

module.exports = AdminMain;
