import React, {
	Component
} from 'react';
import moment from 'moment';
import Header from './Header.js';
import Body from './Body.js';
import {
	createDataByMonth,
	initData,
	preMonth,
	nextMonth
} from './core.js'

class Calendar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			year: moment().year(),
			month: moment().month()
		};
	}

	preHandler() {
		var pre = moment([this.state.year, this.state.month]).add(-1, 'months');
		var state = {
			year: pre.year(),
			month: pre.month(),
			selectedDay: null
		}
		console.log('pre state:' + state);
		this.setState(state);
	}

	nextHandler() {
		var next = moment([this.state.year, this.state.month]).add(1, 'months');
		var state = {
			year: next.year(),
			month: next.month(),
			selectedDay: null
		}
		this.setState(state);
	}

	selectedDayHandler(date) {
		console.log('selectedDay:' + date);
		var state = {
			selectedDay: date
		}
		this.setState(state);
	}

	render() {
		var data = createDataByMonth(this.state.year, this.state.month, this.state.selectedDay);
		return (
			<div className="calendar" >
			    <Header year={this.state.year} 
			            month={this.state.month} 
			            preHandler={this.preHandler.bind(this)} 
			            nextHandler={this.nextHandler.bind(this)}
			            >
			    </Header>
			    <Body data = {data}
			          selectedDayHandler={this.selectedDayHandler.bind(this)}
			          >
			    </Body>
			</div>
		);
	}
}

export default Calendar;