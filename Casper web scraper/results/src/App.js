import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      businesses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/getBusinesses') 
    .then(res => {
      console.log('This is the response from the server.')
      console.log(res)
      this.setState({
        businesses: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  render() {
    console.log(this.state.businesses)
    let displayBusinesses = this.state.businesses.map((business, i) => {
      return (
        <div className="padding" key={i}>
          <div className="card resize">
            <div className="card-image waves-effect waves-block waves-light">
              <img src="http://www.auroville.org/system/image_attachments/images/000/008/131/original/Bakery.jpg?1407370708"/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{business.name}</span>
              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p><a href={business.website? "http://www." + business.website : "#"} target="_blank">Website</a></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div>
        <h1>Unverified Business Finder</h1>
        <h3>{this.state.businesses.length === 0? 'Searching...' : ''}</h3>
        {displayBusinesses}
      </div>
    );
  }
}

export default App;
