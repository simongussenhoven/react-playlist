import React from 'react'

  class TableHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {genre: 'All', rating: "?"};
      this.handleChange = this.handleChange.bind(this);;
    }
  //set component state, if value = 1, there's a rating. otherwise, there's a genre
    handleChange = async (e)=>{
      //if input length is one, it's a rating
      if (e.target.value.length === 1) {
        await this.setState({rating: e.target.value})
        
      }
      //otherwise, it's a genre
      else {
        await this.setState({genre: e.target.value})
      }
      try {this.props.filter(this.state.genre, this.state.rating)}
      catch(error){alert(error)}
      }
  

  render() {
    return (
      
      <div className="list__tableheader"> 
      <span className="list__span">Title</span>
      <span className="list__span">Artist</span>
      <span className="list__span">
        <form>
          <select className="list__select" value={this.state.genre} onChange={this.handleChange}>
          <option select value='All'>All genres</option>
            <option select value='Pop'>Pop</option>
            <option select value='Rock'>Rock</option>
            <option select value='Hiphop'>Hiphop</option>
            <option select value='Hiphop'>Christmas</option>
            <option select value='Other'>Other</option>
            <option></option>
          </select>
        </form>
      </span>
      <span className="list__span">
        <form>
          <select className="list__select" value={this.state.rating} onChange={this.handleChange}>
          <option select value='?'>All ratings</option>
            <option select value='5'>5</option>
            <option select value='4'>4</option>
            <option select value='3'>3</option>
            <option select value='2'>2</option>
            <option select value='1'>1</option>
          </select>
        </form>
      </span>
      </div>
    );
  }
}
export default TableHeader