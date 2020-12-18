function ListItem(props) {
  return (
    <div 
    className="list__row"
    onClick={() => {props.deleteItem(props)}}
    >
      <span className="list__span">{props.title}</span>
      <span className="list__span">{props.artist}</span>
      <span className="list__span">{props.genre}</span>
      <span className="list__span">{props.rating}</span>
    </div>
  );
}

export default ListItem;
