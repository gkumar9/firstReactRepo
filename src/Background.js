import React, { Component } from 'react';

class Background extends Component{
	constructor(props){
		super(props)
		this.state={pictures:[]}
	}
	componentDidMount(){
		fetch('https://randomuser.me/api?results=3')
		.then(results=>{
			return results.json();
		}).then(data=>{
			let pictures=data.results.map((pic)=>{
				return(
					<span key={pic.login.uuid}>
						<img src={pic.picture.medium} alt=''/>
					</span>
					)
			})
			this.setState({pictures:pictures})
		})
	}

	render(){
		return(
				<div className="Container1">
				{this.state.pictures}
				</div>
			)
	}
}

export default Background;