import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component{
    render(){
        return(
            <div className="button">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
        )
    }
}