import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	// Metodo de ciclo de vida
	componentDidMount() { // Se ejecuta después que la salida del componente ha sido renderizada en el DOM
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
		console.log(this.timerID);
	}

	// Metodo de ciclo de vida
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// No modifiques el estado directamente
		// Incorrecto
		// this.state.date = new Date();
		// Correcto
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	};
}

export default Clock;