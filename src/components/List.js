import React, { Component,Fragment } from 'react';
import './List.css';
import Button from './Button';
import Contact from './Contact';
import Group from './Group';


var contacts = [
    {firstName:"John",lastName: "Deere",address:"1500 nowhere avenue, long island, CA"},
    {firstName:"1Jeff",lastName:"Green",address:"1500 nowhere avenue, long island, CA"},
    {firstName: "Nia",lastName:"Long",address:"1500 nowhere avenue, long island, CA"},
    {firstName: "Michelle",lastName:"Bigsby",address:"1500 nowhere avenue, long island, CA"},
    {firstName: "Adrian",lastName:"Young",address:"1500 nowhere avenue, long island, CA"},
    {firstName: "2Brian",lastName:"McManaman",address:"1500 nowhere avenue, long island, CA"},
    {firstName: "joyce",lastName:"Jefferson",address:"1500 nowhere avenue, long island, CA"}
].sort(function(a,b) {return (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : ((b.firstName.toUpperCase() > a.firstName.toUpperCase()) ? -1 : 0);})

class List extends Component{
    renderContacts=()=>{
        let indexes = [];
        let numFlag = false;
        for(var a = 0; a<contacts.length;a++){
            var index = contacts[a].firstName[0];
            if(indexes.indexOf(index.toUpperCase())===-1){
                indexes.push(index);
            }
        }
        return contacts.map((contact,i)=>{
            const ind = indexes.indexOf(contact.firstName[0]);
            if(numFlag===false && !(isNaN(contact.firstName[0]))){
                numFlag = true;
                return(
                    <Fragment>
                        <Group key={i} title={"#"}/>
                        <Contact key={i} contact={contact}/>
                    </Fragment>
                )
            }
            else if(numFlag===true && !(isNaN(contact.firstName[0]))){
                numFlag = true;
                return(
                    <Contact key={i} contact={contact}  className="top"/>
                )
            }
            else if(ind >-1){
                indexes.splice(ind,1);
                return (
                    <Fragment>
                        <Group key={i} title={contact.firstName[0]}/>
                        <Contact key={i} contact={contact}/>
                    </Fragment>
                )
            }
            
            return <Contact key={i} contact={contact} className="top"/>

            
    })
    }
        render(){
        return(
            <div>
                {this.renderContacts()}
                <Button/>
            </div>
        )
        }
}




export default List;