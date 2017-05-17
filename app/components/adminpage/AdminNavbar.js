import React from 'react';

let S = {
    navList: {
        marginLeft: "20px",
        marginTop: "70px"
    },
    buttonStyle: {
        fontFamily: 'lucida grande, Helvetica',
        fontSize: '20px',
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "40px",
        color: "#164065",
        padding: "0 15px",
        border: "2px solid black",
        boxShadow: "5px 5px black",
        marginBottom: "5px",
        width: "200px",
        marginTop: "20px"
    }
};

class AdminNavbar extends React.Component {
    //constructor are always get called with props
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div style={S.navList}>
                <div style={S.buttonStyle}>Projects</div>
                <div style={S.buttonStyle}>Users</div>
                <div style={S.buttonStyle}>Data</div>
            </div>)
    }
}
module.exports = AdminNavbar;
