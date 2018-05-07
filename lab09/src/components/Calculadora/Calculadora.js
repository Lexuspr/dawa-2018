import React, {Component} from 'react';
import classes from './Calculadora.css'

export default class Calculadora extends Component{
	state = {
		num1: 0,
		num2: 0,
		resultado: 0
	}
	onChangeNumber = (num) => {
		if (num.target.id == "nu1"){
			this.setState({
				num1: parseFloat(num.target.value)
			});
		} else if (num.target.id == "nu2"){
			this.setState({
				num2: parseFloat(num.target.value)
			});
		}
		
	}
	sumar = () => {
		this.setState({
			resultado: this.state.num1 + this.state.num2
		});
	}
	restar = () => {
		this.setState({
			resultado: this.state.num1 - this.state.num2
		});
	}
	multiplicar = () => {
		this.setState({
			resultado: this.state.num1 * this.state.num2
		});
	}
	dividir = () => {
		if (this.state.num2>0){
			this.setState({
				resultado: this.state.num1 / this.state.num2
			});
		} else {
			this.setState({
				resultado: 'Infinity War'
			});
		}
		
	}
	porcentaje = () => {
		this.setState({
			resultado: this.state.num1/100 
		});
	}
	render(){
		return (
			<div className={classes.Calculadora}>
				<h1> Calculadora </h1>
				<p>Numero 1:</p>
				<input type="number" id="nu1" value={this.state.num1} onChange={this.onChangeNumber} />
				<p>Numero 2:</p>
				<input type="number" id="nu2" value={this.state.num2} onChange={this.onChangeNumber} />
				<p />
				<button onClick={this.sumar}>Sumar</button>
				<button onClick={this.restar}>Restar</button>
				<button onClick={this.multiplicar}>Multiplicar</button>
				<button onClick={this.dividir}>Dividir</button>
				<button onClick={this.porcentaje}>Porcentaje</button>
				<hr />
				<h1> Resultado: </h1>
				<p>{this.state.resultado}</p>
			</div>
		)
	}
}
