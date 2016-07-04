import React, {
	Component
} from 'react';
import Item from './Item.js';
class Body extends Component {
	initBodyData() {
		var self = this;
		var data = this.props.data.map(function(week) {
			var tdArray = week.map(function(day) {
				return (
					<Item year={day.year} 
					      month={day.month} 
					      date={day.date} 
					      selected={day.selected} 
					      clickHandler={self.clickHandler.bind(self)}>
					</Item>
				);
			});
			return (
				<tr>
			        {tdArray}
			    </tr>
			);
		});

		return data;
	}

	clickHandler(date) {
		console.log('click year:' + date.year + ',month:' + date.month + ',day:' + date.date);
		this.props.selectedDayHandler(date);
	}

	render() {
		var data = this.initBodyData();
		return (
			<div className="cld_bd">
	    	    <table>
	    	        <thead>
    	    	        <tr>
	    	        	    <td>日</td>
	    	        	    <td>一</td>
	    	        	    <td>二</td>
	    	        	    <td>三</td>
	    	        	    <td>四</td>
	    	        	    <td>五</td>
	    	        	    <td>六</td>
	    	            </tr>
	    	        </thead>
	    	        <tbody>
	    	        	{data}
	    	        </tbody>
	            </table>
	    	</div>
		);
	}
}

export default Body;