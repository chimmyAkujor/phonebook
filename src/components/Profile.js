import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setUser} from '../actions/userActions'
import './Profile.css'

class Profile extends Component{
    render(){
        return(
            <div className="container">
                <h1>Contacts</h1>
                <div className="profile-picture"></div>
                <div onClick = {()=>this.props.setUser()}
                 className="profile-details">
                    <h3>{this.props.user.first} {this.props.user.last}</h3>
                    <p> My number: {this.props.user.phone}</p>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({setUser:setUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);