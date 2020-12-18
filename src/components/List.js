import ListItem from './ListItem'
import TableHeader from './TableHeader'

function List(props) {
    //if the song has visible=true, create a list item
    const items = props.songs.map(song => {
      if (song.visible) {
        return <ListItem {...song} deleteItem={props.deleteItem} key={song.id}/>
       }
       return null
    })
    return (
    <div className="list">
        <TableHeader 
        filter={props.filter}
        />
        {items}
    </div>
  );
}

export default List;
