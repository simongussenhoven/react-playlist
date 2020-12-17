

function TableHeader (props) {
  const handleSelect=(e)=>{
    props.filter(e.target.value);
  }
    return (
        <div className="list__row"> 
        <span>Title</span>
        <span>Artist</span>
        <span className="list__genre">
            <select 
            name='select'
            value
            onChange={handleSelect}>
              <option select value=''>Genre</option>
              <option select value='Pop'>Pop</option>
              <option select value='Rock'>Rock</option>
              <option select value='Hiphop'>Hiphop</option>
              <option select value='Other'>Other</option>
            </select>
        </span>
      <span>Rating</span>
      </div>
    );
  }
  export default TableHeader;


