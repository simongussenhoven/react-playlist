import React from 'react';
import Nav from './Nav';
import List from './List';
import Form from './Form';
import About from './About'


class App extends React.Component {
  constructor (){
    super();
    this.state = {
        songs: 
        [
          {visible: true, id: 0, title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop", rating: "5"},
          {visible: true, id: 2, title: "Smells like teen spirit", artist: "Nirvana", genre: "Rock", rating: "5"},
          {visible: true, id: 3, title: "Like a Rolling Stone", artist: "Bob Dylan", genre: "Rock", rating: "3"},
          {visible: true, id: 4, title: "(I Can't Get No) Satisfaction", artist: "	The Rolling Stones", genre: "Rock", rating: "1"},
          {visible: true, id: 5, title: "Imagine", artist: "John Lennon", genre: "Pop", rating: "5"},
          {visible: true, id: 6, title: "What's Going On", artist: "Marvin Gaye", genre: "Rock", rating: "4"},
          {visible: true, id: 9, title: "Rubadubdub", artist: "Rick", genre: "Other", rating: "3" }
        ]
    }
  }

// function to add item
addItem = (song) => {
  const songs = this.state.songs.concat(song) 
  this.setState({
    songs
  })
}

//function to delete item
deleteItem = (item) => {
  const songs = this.state.songs.filter(song => {
    return song.id !== item.id
  })
  this.setState({
    songs
  })
}
//function to filter items
filter = (genre, rating) => {
const songs = this.state.songs

//if no filter is set, show all
  if (genre === "All" && rating ==="All"){
    songs.forEach(song => song.visible = true)
  }

//if there is a filter on rating, check if it meets filter value
  else if (genre === "All") {
    alert('filter on rating')
    songs.forEach(song => {
      if(song.rating === rating) {
        song.visible=true
      }
      else {
        song.visible=false
      }
    })
  }

//if there is a filter on genre, check if it meets filter value
  else if (rating === "All") {
    alert('filter on genre')
    songs.forEach(song => {
      if(song.genre === genre) {
        song.visible=true
      }
      else {
        song.visible=false
      }
    })
  }

//if there is a filter on both, check if it meets filter value
  else {
    alert('both filtered')
    songs.forEach(song => {
      if(song.rating === rating && song.genre === genre) {
        song.visible=true
      }
      else {
        song.visible=false
      }
    })
  }

//set new state
  this.setState({
    songs
  })
}

  render(){
    return (
      <div className="app">
        
        <Form 
        addItem={this.addItem}
        songs={this.state.songs}
        />
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
