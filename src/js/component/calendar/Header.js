import React, {
	Component
} from 'react';

class Header extends Component {
	render() {
		return (
			<div className="cld_hd">
	    	    <div className="nav-left" onClick={this.props.preHandler}><span>&lt;</span></div>
	    	    <div className="nav-right" onClick={this.props.nextHandler}><span>&gt;</span></div>
	    	    <div className="cld_month">
	    	        <p>{this.props.month + 1}月</p>
	    		    <p>{this.props.year}年</p>
	    	    </div>
	    	</div>
		);
	}
}

export default Header;