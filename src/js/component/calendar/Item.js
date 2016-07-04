import React, {
	Component
} from 'react';

class Item extends Component {
	render() {
		var className = this.props.selected ? 'selected' : '';
		return (
			<td onClick={this.clickHandler.bind(this)} className={className}>{this.props.date}</td>
		);

	}

	clickHandler() {
		this.props.clickHandler({
			year: this.props.year,
			month: this.props.month,
			date: this.props.date
		});
	}
}

export default Item;