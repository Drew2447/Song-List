import React from "react";
import "./App.css";
import SongForm from "./SongForm";
import Songs from "./Songs";


class App extends React.Component {
  state = {
    show: false,
    songs: [
      { id: 1, song: "Kill Us", band: "No Resolve" },
      { id: 2, song: "Set Fire To The Rain", band: "No Resolve" },
      { id: 3, song: "End Of Us", band: "No Resolve" },
    ],
  };

  addSong = (songInfo)=>{
    let newSong = {...songInfo, id:Math.random()}
    let newSongs = [newSong, ...this.state.songs]
    this.setState({
      songs: newSongs
    })
  }

  deleteSong = (id)=>{
    let newSongs = this.state.songs.filter(c=> c.id !== id)
    this.setState({
      songs: newSongs
    })
  }
  render() {
    
    return (
     
        <div>
          <h1>Songs</h1>
          <Songs songs={this.state.songs} deleteSong={this.deleteSong}/>
          <h1>New Song</h1>
          <SongForm addSong={this.addSong}/>
        </div>
     
    );
  }
}

export default App;