import React, { Component } from 'react';
import Clock from './Clock.jsx'
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			deadline: 'April 12, 2019',
		}	
	}

	render() {
		return(
		<div className="App">
			<div><b>WINTER IS COMING ~ {this.state.deadline}</b></div>
			<Clock deadline={this.state.deadline} />	
		</div>
		)
	}
}

export default App;