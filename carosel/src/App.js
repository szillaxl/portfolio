import React, { Component } from 'react';
import './App.css';


const images = [
'http://imgur.com/9itd49u.png',
'http://imgur.com/n19BXfZ.png',
'http://imgur.com/VBwQmzA.png',
'http://imgur.com/nawDxVv.png']


class App extends React.Component {
    constructor() {
        super();
     
        this.state = {
            number: 1
        }
      
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    next() {
        this.setState({
            number: this.state.number+1
        })
    }

    previous() {
        this.setState({
            number: this.state.number-1
        })
    }

	render() {
		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button onClick={this.previous} disabled={this.state.number === 1 ? true : false} >Previous</button>
			      	<span>{this.state.number} of 4</span>
			      	<button onClick={this.next} disabled={this.state.number === 4 ? true : false} >Next</button>
			    </div>
				<div>
					<img src= {images[this.state.number-1]} />
				</div>
			</div>			
		)
	}
}

export default App;