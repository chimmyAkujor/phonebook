import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';

const Contact = (props)=>(
    
    <Link to={`/contactpage/${props.contact.firstName}+${props.contact.lastName}`}>
        <div className={props.className}>
            <p> {props.contact.firstName} {props.contact.lastName}  </p>

        </div>
    </Link>
)

export default Contact;