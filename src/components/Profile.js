import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component{
    render(){
        return(
            <div className="container">
                <h1>Contacts</h1>
                <div className="profile-picture"></div>
                <div className="profile-details">
                    <h3>Jessica Webb</h3>
                    <p> My number:</p>
                </div>
            </div>
        );
    }
}

export default Profile;