import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import About from './About';
import Todoapp from './Todoapp';

class App extends Component {
  constructor(){
    super();
  //set state here
  this.state={
  page: 'Todo'
};

 
  }

  render() {
     
    return (
    <div  className="App">
      <nav>
        <div id="AlertDiv">
          <button> <Link to="/todo" style={{color: 'black'}} activeStyle={{color: 'blue'}}>To Do List</Link></button>
          <button><Link to="/about" style={{color: 'black'}} activeStyle={{color: 'blue'}}>About Page</Link></button>
        </div>   
      </nav>
<h1 id="MAH">Multiview Assignment</h1>
{this.props.children}  
</div>
    );

  }
}

export default App;
