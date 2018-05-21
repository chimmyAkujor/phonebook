import React, { Component,Fragment } from 'react';
import './List.css';
import Button from './Button';
import Contact from './Contact';
import Group from './Group';



class List extends Component{
    state = {
        contacts:[
            {firstName: "John",lastName: "Deere",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "1Jeff",lastName:"Green",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "Nia",lastName:"Long",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "Michelle",lastName:"Bigsby",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "Adrian",lastName:"Young",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "2Brian",lastName:"McManaman",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "joyce",lastName:"Jefferson",address:"1500 nowhere avenue, long island, CA"},
            {firstName: "Zack",lastName:"Brewer",address:"1500 nowhere avenue, long island, CA"},
        ]
    }
    componentDidMount=()=>{
        this.setState({             //sort contact list by firstname
            contacts : this.state.contacts.sort(function(a,b){
                return (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : ((b.firstName.toUpperCase() > a.firstName.toUpperCase()) ? -1 : 0);})
            }
        )
        
    }
    renderContacts=()=>{            //populate an array with fist letter of firstnames
        let indexes = [];
        let numFlag = false;        //flag for name starting with a number
        let contacts = this.state.contacts;
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
                        <Contact key={i} contact={contact}/>
                    </Fragment>
                )
            }
            else if(numFlag===true && !(isNaN(contact.firstName[0]))){  //if !first index that's a number
                numFlag = true;
                return(
                    <Contact key={i} contact={contact}  className="top"/>
                )
            }
            else if(ind >-1){                                           //if index exist render and pop from list of index
                indexes.splice(ind,1);
                return (
                    <Fragment key={Math.random()}>
                        <Group key={Math.random()} title={contact.firstName[0]}/>
                        <Contact key={i} contact={contact}/>
                    </Fragment>
                )
            }
            return <Contact key={i} contact={contact} className="top"/> //else just return the contact to the list

            
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