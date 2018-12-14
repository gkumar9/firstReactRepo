import React, { Component } from 'react';


class Toggle extends Component{
  constructor(){
    super()
    this.state={isToggleOn:true}
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    console.log('handleClick')
    this.setState(state=>({
      isToggleOn:!state.isToggleOn
    }))
    
  }

  render(){
    return(
      <div>
      <span>Toggle : </span>
      <button type="button" className="btn btn-primary" onClick={this.handleClick}>
      {this.state.isToggleOn ? "ON":"OFF"}
      </button>
      </div>
      )
  }
}

export default Toggle;