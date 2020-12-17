import React from 'react';
import Nav from './Nav';
import List from './List';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
        songs: 
        [
          {id: 0, title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop", rating: 5, visible: true},
          {id: 2, title: "Smells like teen spirit", artist: "Nirvana", genre: "Rock", rating: 5, visible: true},
          {id: 3, title: "Like a Rolling Stone", artist: "Bob Dylan", genre: "Rock", rating: 3, visible: true},
          {id: 4, title: "(I Can't Get No) Satisfaction", artist: "	The Rolling Stones", genre: "Rock", rating: 1, visible: true},
          {id: 5, title: "Imagine", artist: "John Lennon", genre: "Pop", rating: 5, visible: true},
          {id: 6, title: "What's Going On", artist: "Marvin Gaye", genre: "Rock", rating: 4, visible: false}
        ]
    }

  }

deleteItem = (item) => {
  const songs = this.state.songs.filter(song => {
    return song.id !== item.id
  })
  this.setState({
    songs
  })
}

filter = (genre) => {
  const songs = this.state.songs.map(song => {
    if (song.genre === genre) {
      song.visible = true;
      return song
    }
    song.visible = false;
    return song
  })
  this.setState({
    songs 
  })
}

  render(){
    return (
      <div className="app">
        <Nav/>
        <List 
        songs={this.state.songs} 
        deleteItem={this.deleteItem} 
        filter={this.filter}
        />
      </div>
    );
  }
}
export default App;
