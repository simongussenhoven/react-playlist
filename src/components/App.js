import React from 'react';
import Nav from './Nav';
import List from './List';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
        songs: 
        [
          {id: 0, title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop", rating: 5},
          {id: 1, title: "Smells like teen spirit", artist: "Nirvana", genre: "Rock", rating: 5}
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

  render(){
    return (
      <div className="App">
        <Nav/>
        <List songs={this.state.songs} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}
export default App;
