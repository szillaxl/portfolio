import React, { Component } from 'react';
import {Link } from 'react-router';
import "../index.css"

class SongDetails extends Component {
    render() {
        // console.log(this.props)
        let songs = this.props.songs
        console.log(songs[this.props.routeParams.id].title)

        return (
            <div className='details'>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container1">
                        
                            <ul>
                                <Link id='back' className='titles' to="/"> <i className="fa fa-undo fa-2x" aria-hidden="true"></i></Link>
                               
                            </ul>
                        </div>
                        
                    </nav>
                </div>
                
                <img role="presentation" className='songImage' src={songs[this.props.routeParams.id].img}/>
                
                <h1 className='songTitle'>{songs[this.props.routeParams.id].title}</h1>
                 <i id="detailPlay" className="fa fa-play-circle-o fa-2x" aria-hidden="true" onClick={() => this.props.changeSong(this.props.routeParams.id)}> </i>
                 
                <p className='description'>{songs[this.props.routeParams.id].description}</p>
                {this.props.playButton}
            </div>
        )
    }
}
export default SongDetails;