import React, {Component} from 'react';


class App extends Component {
    render() {
        /* START WRITING YOUR CODE HERE */
     
    const cards = this.props.cards;
    const cardslist = [];
    for(let i = 0; i < cards.length; i++){
    const carddata=
    <Card key={i} imgSrc= {cards[i].imgSrc} title={cards[i].title} /> 
    cardslist.push(carddata);
    } 
          
         
 return(
         <div className ="container">
    <h1>BrainStaGram</h1>
    <div className ="row">
       {cardslist}
         </div>
    </div>  

  )
         
    }
}

class Card extends Component {
    render() {
        return (
            <div className="col s4">
                <div className="card">
                    <div className ="card-image">
                        <img src= {this.props.imgSrc}/>
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>Powering the next generation of creators. Build your skills in business, design &amp; technology.</p>
                    </div>
                </div>
             </div>
        )
       
    }
}

export default App;

