

function Form(props) {
    
    //compile the item from the submit here
    function handleSubmit(e) {
        e.preventDefault(); 
        const newItem = {
            id: props.songs.slice(-1)[0].id +1,
            title: e.target.title.value, 
            artist: e.target.artist.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            visible: true
        }
        props.addItem(newItem)  
    }

    return (
      <form onSubmit = {handleSubmit}>
          <h2>Add a new song</h2>
          <input name='title' type='text' required></input>
          <input name='artist' type='text' required></input>
          <select name='genre' required>
              <option value='' selected={true}>Select a genre</option>
              <option value='Pop'>Pop</option>
              <option value='Rock'>Rock</option>
              <option value='Hiphop'>Hiphop</option>
              <option value='Other'>Other</option>
          </select>
          <select name='rating' required>
              <option value=''>Select a rating</option>
              <option value='1'>5</option>
              <option value='2'>4</option>
              <option value='3'>3</option>
              <option value='4'>2</option>
              <option value='5'>1</option>
          </select>
          <input type="submit"/>
      </form>
    );
  }
  
  export default Form;
  