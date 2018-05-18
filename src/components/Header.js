import React, { Component } from 'react';
import './Profile';
import Profile from './Profile';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>Contacts</h1>
                <Profile/>
            </header>
        );
    }
}

export default Header;