import React from 'react';
import './Contact.css';


const Contact = (props)=>(
<div className={props.className}>
    <p> {props.contact.firstName} {props.contact.lastName}  </p>
</div>
)

export default Contact;