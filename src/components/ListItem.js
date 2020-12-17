function ListItem(props) {
  return (
    <div 
    className="list__row"
    onClick={() => {props.deleteItem(props)}}
    >
      <span>{props.title}</span><span>{props.artist}</span><span>{props.genre}</span><span>{props.rating}</span>
    </div>
  );
}

export default ListItem;
