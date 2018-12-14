import React, { Component } from 'react';

class Clock extends Component{
  constructor(){
      super();
            
      this.state={date:new Date()}
    }

  componentDidMount(){
    this.timer=setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
        <span>Clock :</span>
        <span> {this.state.date.toLocaleTimeString()}.</span>
      </div>
    )
  }
}


export default Clock;