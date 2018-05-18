import React, { Component } from 'react';
import Contact from './Contact';

class Group extends Component{
    render() {
      var subList = [];
      if(this.props.firstName){
        var person = {
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          address: ""
        }
        subList.push(person);
        let d = document.getElementsByTagName("div");
        d.appendChild(<Contact/>);
      }
      return (
        <div>
          <h4> {this.props.title} </h4>
        </div>
      )
    }
}

export default Group;