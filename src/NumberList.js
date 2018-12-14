import React, { Component } from 'react';

class ListItems extends Component{
  render(){
    return(
      <li>{this.props.value}</li>
      )
  }
}

class NumberList extends Component{
  render(){
  const numbers=this.props.numbers
  const listitems=numbers.map((number)=>
    <ListItems key={number.toString()} value={number} />
  )
  return(
      <div>
      <span>ListItems: </span>
      <ul>{listitems}</ul>
      </div>
    )
  }
}

export default NumberList;