import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setActiveId} from '../actions/contactActions'

const Contact = (props)=>(
    // <Link to={`/contactpage/${props.contact.firstName}+${props.contact.lastName}`}>
    <Link onClick={()=>setActiveId(props.id)} to='/contactdetails'>
       <div className={props.className} >
            <p> {props.contact.firstName} {props.contact.lastName}  </p>
        </div>
    </Link>
)
function mapStateToProps(state){
    return{
        contacts: state.contactReducer.contacts,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({setActiveId:setActiveId},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);