import React, { Component } from 'react'
import {connect} from 'react-redux'


class ContactDetail extends Component{
    render(){
        return(
            <div>
                <h3>CONTACT DETAIL</h3>
                {console.log(this.props.id)}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        contacts: state.contactReducer.contacts,
        id: state.contactReducer.activeId
    }
  }
  export default connect(mapStateToProps)(ContactDetail);
