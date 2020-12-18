

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
      <form className="form" onSubmit = {handleSubmit}>
          <h1 className="form__header">Add a new song</h1>
          <input className="form__input" name='title' type='text' required placeholder="Enter song title"></input>
          <input className="form__input"  name='artist' type='text' required placeholder="Enter artist" ></input>
          <select className="form__select"  name='genre' required>
              <option value=' '>Select a genre</option>
              <option value='Pop'>Pop</option>
              <option value='Rock'>Rock</option>
              <option value='Hiphop'>Hiphop</option>
              <option value='Christmas'>Christmas</option>
              <option value='Other'>Other</option>
          </select>
          <select className="form__select"  name='rating' required>
              <option value=' '>Select a rating</option>
              <option value='5'>5</option>
              <option value='4'>4</option>
              <option value='3'>3</option>
              <option value='2'>2</option>
              <option value='1'>1</option>
          </select>
          <input className="form__input" type="submit"/>
      </form>
    );
  }
  
  export default Form;
  