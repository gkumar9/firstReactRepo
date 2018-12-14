import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class BoilingVerdict extends Component{
	render(){
			
			if(this.props.celsius>=100){
				return(<p>The water would boil.</p>)
			}
			else{
				return(<p>The water would not boil.</p>)
			}
			
	}
}

class TemperatureInput extends Component{
	constructor(props){
		super(props)
		this.state={temperatureCelsius:'0',temperatureFahrenheit:'32'}
		this.handleChangeCelsius=this.handleChangeCelsius.bind(this);
		this.handleChangeFahrenheit=this.handleChangeFahrenheit.bind(this);

	}

	handleChangeCelsius(event){
		this.setState({temperatureCelsius:event.target.value,
			temperatureFahrenheit:(event.target.value * 9 / 5) + 32
		})
	}
	handleChangeFahrenheit(event){
		this.setState({temperatureFahrenheit:event.target.value,
			temperatureCelsius:(event.target.value - 32) * 5 / 9
		})
	}

	render(){
		let temperatureCelsius=this.state.temperatureCelsius;
		let temperatureFahrenheit=this.state.temperatureFahrenheit;
		let scale = this.props.scale;
		return(
			<fieldset className="form-control">
				<legend> Enter the temperature in {scaleNames[scale]}:</legend>
				<label>
				{scaleNames[scale]==='Celsius'?(
					<input type="number" className="form-control" value={temperatureCelsius} onChange={this.handleChangeCelsius} />
				
					):(
					<input type="number" className="form-control" value={temperatureFahrenheit} onChange={this.handleChangeFahrenheit} />
				
					)}
					Verdict: <BoilingVerdict celsius={parseFloat(temperatureCelsius)} />
				
				</label>
			</fieldset>
		)
	}
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}


export default Calculator;