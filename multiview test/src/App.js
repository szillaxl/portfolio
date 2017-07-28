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
    <div className="App">
      <nav>
        <div>
          <div><Link to="/todo">To Do List</Link></div>
          <div><Link to="/about">About Page</Link></div>
        </div>   
      </nav>
<h1>Multiview Assignment</h1>
{this.props.children}  
</div>
    );

  }
}

export default App;
