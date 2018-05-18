import React, { Component } from 'react';
import Contact from './Contact';

class Group extends Component{
    render() {
      return (
        <div>
          <h4> {this.props.title} </h4>
        </div>
      )
    }
}

export default Group;