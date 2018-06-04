import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
		this.getTimeUntil = this.getTimeUntil.bind(this);
	}

	componentWillMount() {
    	this.getTimeUntil(this.props.deadline);
  	}

  	componentDidMount() {
    	setInterval( () => this.getTimeUntil(this.props.deadline), 1000);
  }
  
    getTimeUntil(deadline) {
    	const time = Date.parse(deadline) - Date.parse(new Date());
    	const seconds = Math.floor((time/1000) % 60);
    	const minutes = Math.floor((time/1000/60) % 60);
    	const hours = Math.floor(time/(1000*60*60) % 24);
    	const days = Math.floor(time/(1000*60*60*24));

    	this.setState({days, hours, minutes, seconds});
  }

	render(){
		return(
		<div>
			<div className="Clock-days"><b>{this.state.days} Days</b></div>
			<div className="Clock-hours"><b>{this.state.hours} Hour(s)</b></div>
			<div className="Clock-minutes"><b>{this.state.minutes} Minute(s)</b></div>
			<div className="Clock-seconds"><b>{this.state.seconds} Second(s)</b></div>				
		</div>
		)
	}
}

export default Clock;