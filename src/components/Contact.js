import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <p> {this.props.name} </p>
            </div>
        )
    }
}

export default Contact;