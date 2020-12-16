function ListItem(props) {
  return (
    <div className="row">
      <span>{props.title}</span><span>{props.artist}</span><span>{props.genre}</span><span>{props.rating}</span>
    </div>
  );
}

export default ListItem;
