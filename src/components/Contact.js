import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <p> {this.props.contact.firstName} {this.props.contact.lastName}  </p>
            </div>
        )
    }
}

export default Contact;