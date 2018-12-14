import React, { Component } from 'react';

class Mailbox extends Component{
  render(){
    // const listmail=this.props.unreadMessages.map((number,index)=><li key={index}>{number}</li>)
    return(
        <div>
        
        <span>Hello!</span>
          {
            this.props.unreadMessages.length>0 &&
            
            <span> You have {this.props.unreadMessages.length} unread messages. 
            
            </span>
          }
        </div>
      )
  }
}

export default Mailbox;