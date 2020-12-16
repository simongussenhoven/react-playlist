import ListItem from './ListItem'

function List(props) {
    const items = props.songs.map(song => {
      return <ListItem {...song} deleteItem={props.deleteItem}/>
    })
    return (
    <div className="list">
        <h2>Checkout my playlist!</h2>
        {items}
    </div>
  );
}

export default List;
