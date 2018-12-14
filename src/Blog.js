import React, { Component } from 'react';
class Blog extends Component{
  render(){
    let sidebar=(
      <ul>
        {
          this.props.post.map((post)=>
            <li key={post.id}>
              {post.title}
            </li>
            )
        }
      </ul>
      );

    let content=this.props.post.map((post)=>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      );

    return(
        <div>
          {sidebar}
          <hr/>
          {content}
        </div>

      )
  }
}

export default Blog