import React, {
	Component
} from 'react';

import Calendar from './calendar';

class App extends Component {
	render() {
		return (
			<div className="container">
	            <div className="hd ">
	                <div className="page_title">预约时间</div>
	            </div>
	            <div className="bd spacing">
	                <Calendar></Calendar>
	            </div>
	            <div className="footer"></div>
	        </div>
		);
	}
}

export default App;