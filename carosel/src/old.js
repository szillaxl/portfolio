import React, { Component } from 'react';
import './App.css';

/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png'
'http://imgur.com/n19BXfZ.png'
'http://imgur.com/VBwQmzA.png'
'http://imgur.com/nawDxVv.png'
-------------------------------------------------- */
class App extends React.Component{
  constructor() {
        super();
        this.state = {
            currentImage: 1
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
}



class App extends Component {
	render() {
		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
			    	<button disabled={this.state.currentImage === 1 ? true : false} onClick={this.prev}>Previous</button>
            <span>{this.state.currentImage} of 4</span>
            <button disabled={this.state.currentImage === 4 ? true : false} onClick={this.next}>Next</button>
			    </div>
				<div>
					<img src="http://imgur.com/9itd49u.png" />
				</div>
			</div>			
		)
	}
}



export default App;
