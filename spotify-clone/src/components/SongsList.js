import React, { Component } from 'react';
import {Link } from 'react-router';
import "../index.css"

class SongsList extends Component {
    render() {
        //    console.log(this.props.description//   
        let songArray = []
        songArray = this.props.songs.map((element) => {
            return (
                <div className='list'>
                    <div className='button'>
                        <i id="main" className="fa fa-play-circle-o fa-2x" aria-hidden="true" onClick={() => this.props.changeSong(element.id)}> </i>
                    </div>
                    <div className='title'>
                        <Link className='titles' to={`songs/${element.id}`}><h1 className='songtitles'>{element.title}</h1></Link>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <ul>
                    {songArray}
                </ul>
            </div>
        )
    }
}
export default SongsList