import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfguest: 3
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let target = event.target
        let value = target.type === 'checkbox' ? target.checked : target.value
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <form>
           	<div className="form-group">
					<label>Is Going:
					<input className="form-control" name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
					</label>
					<br />
					<label>
					Guest:
					<input className="form-control" name="numberOfguest" type="number" value={this.state.numberOfguest} onChange={this.handleChange} />
					</label>
					</div>
				</form>
        )
    }
}


export default Reservation;