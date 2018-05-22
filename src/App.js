import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import ContactDetail from './pages/ContactDetail';
import List from './components/List';

class App extends Component {
  state = {
    contacts:[
        {firstName: "John",lastName: "Deere",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "1Jeff",lastName:"Gibberman",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Nia",lastName:"Long",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Michelle",lastName:"Bigsby",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Adrian",lastName:"Young",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "2Brian",lastName:"McManaman",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "joyce",lastName:"Jefferson",address:"1500 nowhere avenue, long island, CA"},
        {firstName: "Zack",lastName:"Brewer",address:"1500 nowhere avenue, long island, CA"},
    ],
    currentIndex:-1,
}
componentDidMount=()=>{
  this.setState({             //sort contact list by firstname
      contacts : this.state.contacts.sort(function(a,b){
          return (a.firstName.toUpperCase() > b.firstName.toUpperCase()) ? 1 : ((b.firstName.toUpperCase() > a.firstName.toUpperCase()) ? -1 : 0);})
      }
  )
  
}
getI = (i)=>{
  this.setState({
    currentIndex:i
  })
}
  render() {
    return (
      <div className="App">
        <Router>
            <Fragment>
                <Route exact path="/" 
                render ={(props)=><List {...props} contacts={this.state.contacts} getI={this.getI}/>}/>
                <Route path="/contactdetails/:name" 
                render = {(props)=><ContactDetail {...props} contacts={this.state.contacts}/>}/>
            </Fragment>
        </Router>      
      </div>
    );
  }
}

export default App;
