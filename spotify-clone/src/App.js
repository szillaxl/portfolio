import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playing: false,
      currentSong: 0,
      duration: 0,
    }
    this.changeSong = this.changeSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }
  changeSong(id) {
    let audio = document.getElementById('player')
    audio.play();
    console.log(id)
    this.setState({
      currentSong: id,
      playing: true,
      // justLoaded: false
    }
    )
  }
  nextSong(id) {
    // console.log(id)
    if (this.state.currentSong == 2) {
      this.setState({ currentSong: 0 })   
  }
  else {this.setState({ currentSong:  parseInt (this.state.currentSong) + 1 })
}
    
  }
  componentDidMount() {
    let audio = document.getElementById('player')
    audio.ondurationchange = () => {
      if (!isNaN(audio.duration)) {
        let minutes = Math.floor(audio.duration / 60);
        let seconds = Math.floor(audio.duration % 60)
     
        let totalTime = minutes + ":" + seconds
        this.setState({
          duration: totalTime
        })
      }
    }
  }
  componentDidUpdate() {
    let audio = document.getElementById('player')
    if (this.state.playing === true) {
      audio.play()
    }
    audio.ontimeupdate = () => {
      if (!isNaN(audio.currentTime)) {
        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        if (seconds < 10){
          seconds = "0" + seconds
        }
        let elapsed = minutes + ":" + seconds
        this.setState({
          currentTime: elapsed
        })
      }
    }
  }
  prevSong(id) {
    // console.log(id)
    
    if (this.state.currentSong == 0) {
      this.setState({ currentSong: 2 })
    }
    else{
      this.setState({ currentSong: parseInt (this.state.currentSong) - 1 })
    }
  }
  pauseSong() {
    console.log("pause")
    let audio = document.getElementById('player')
    if (this.state.playing === true) {
      audio.pause();
      this.setState({ playing: false })
    }
    if (this.state.playing === false) {
      audio.play();
      this.setState({ playing: true })
    }
  }
  render() {
    console.log(this.state)
    const songs = this.props.route.songs
    //  console.log(songs[this.state.currentSong].title)
    let playButton;
    if (this.state.playing === true) {
      playButton = (<i id='main' className="fa fa-pause-circle-o fa-2x" aria-hidden="true" onClick={() => { this.pauseSong() }}></i>)
    }
    if (this.state.playing === false) {
      playButton = (<i id='main' className="fa fa-play-circle-o fa-2x"  aria-hidden="true" onClick={() => { this.pauseSong() }}></i>)
    }
    return (
      <div className="App">
      <header className="header">
        <h1 className="bigtitle">Music Player</h1>
        </header>
        {React.cloneElement(this.props.children, { songs, changeSong: this.changeSong, nextSong: this.nextSong, prevSong: this.prevSong, playSong: this.playSong, playButton: this.playButton })}
        <audio id="player" src={songs[this.state.currentSong].source} >
        </audio>
        <div className="player">
          <i id="main" className="fa fa-step-backward fa-2x" aria-hidden="true" onClick={this.prevSong}></i>
          {playButton}
          <i id='main' className="fa fa-step-forward fa-2x" aria-hidden="true" onClick={this.nextSong}></i>
        </div>
        <div className='status'>
          <h2 className="playing">Now Playing: {songs[this.state.currentSong].title}</h2>
          <h3 className="time">Time:{this.state.currentTime}/{this.state.duration} </h3>
        </div>
      </div>
    );
  }
}
export default App;