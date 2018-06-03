import React, { Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import ContactDetail from './pages/ContactDetail'
import List from './components/List'
import {connect} from 'react-redux'

class App extends Component {
  render() {
      return (
          <Router>
            <div className="App">
              <Route exact path="/" 
                render ={(props)=><List {...props} contacts={this.props.contacts}/>}/>
              <Route path="/contactdetails" 
                render = {()=><ContactDetail />}/>
            </div>
          </Router>      
      );
    }
  
  }
function mapStateToProps(state){
  return{
      contacts: state.contactReducer.contacts,
  }
}

export default connect(mapStateToProps)(App);
