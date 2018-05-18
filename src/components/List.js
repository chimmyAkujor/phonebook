import React, { Component,Fragment } from 'react';
import './List.css';
import Group from './Group';
import Contact from './Contact';

var contacts = [
    {name:"John Deere"},
    {name:"Jeff Green"},
    {name: "Nia Long"},
    {name: "Michelle Bigsby"},
    {name: "Adrian Young"},
    {name: "Brian McManaman"}
].sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);})

class List extends Component{
    renderContacts=()=>{
        let indexes = [];
        for(var a = 0; a<contacts.length;a++){
            var index = contacts[a].name[0];
            if(indexes.indexOf(index)===-1){
                indexes.push(index);
            }
        }
        return contacts.map((contact,i)=>{
            const ind = indexes.indexOf(contact.name[0]);
            if(ind >-1){
                indexes.splice(ind,1);
                return (
                    <Fragment>
                        <Group key={i} title={contact.name[0]}/>
                        <Contact key={i} name = {contact.name}/>
                    </Fragment>
                )
            }
            return <Contact key={i} name = {contact.name}/>

            
    })
    }
        render(){
/*            const index = [];
            var charA = 'a', charZ = 'z', i = charA.charCodeAt(0),
            j = charZ.charCodeAt(0);
            for(;i<=j;++i){
                index.push(String.fromCharCode(i));
            }
            index.push('#');

        var list = index.map((title,x)=><Group key={x} title={title}/>);
  */      
        return(
            <div>
                {this.renderContacts()}
            </div>
        )
        }
}




export default List;