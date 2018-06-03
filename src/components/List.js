import React, { Component,Fragment } from 'react'
import './List.css'
import Button from './Button'
import Contact from './Contact'
import Group from './Group'
import Profile from './Profile'

class List extends Component{

    renderContacts=()=>{            //populate an array with fist letter of firstnames
        let indexes = [];
        let numFlag = false;        //flag for names starting with a number
        let contacts = this.props.contacts;
        for(var a = 0; a<contacts.length;a++){//populate array of index
            var index = contacts[a].firstName[0];
            if(indexes.indexOf(index.toUpperCase())===-1){//push if index does'nt exist
                indexes.push(index);
            }
        }
        return contacts.map((contact,i)=>{      //create grouped list
            const ind = indexes.indexOf(contact.firstName[0]);
            
            if(numFlag===false && !(isNaN(contact.firstName[0]))){  //if first index that's a number
                numFlag = true;
                return(
                    <Fragment key={Math.random()}>
                        <Group key={Math.random()} title={"#"}/>
                        <Contact key={i} id={i} contact={contact}/>
                    </Fragment>
                )
            }
            else if(numFlag===true && !(isNaN(contact.firstName[0]))){  //if !first index that's a number
                numFlag = true;
                return(
                    <Contact key={i} id={i} contact={contact} className="hr"/>
                )
            }
            else if(ind >-1){                                           //if index exist render and pop from list of index
                indexes.splice(ind,1);
                return (
                    <Fragment key={Math.random()}>
                        <Group key={Math.random()} title={contact.firstName[0]}/>
                        <Contact key={i} id={i} contact={contact}/>
                    </Fragment>
                )
            }
            return <Contact key={i} id={i} contact={contact} className="hr"/> //else just return the contact to the list
    })
    }
        render(){
            return(
                <div>
                    <Profile/>
                    {this.renderContacts()}
                    <Button/>
                </div>
            )
        }
}

export default List;