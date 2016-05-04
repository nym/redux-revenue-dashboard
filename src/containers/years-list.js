import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectYear } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class YearList extends Component {
	renderList() {
		return this.props.years.map((year) => {
			return (
				<li 
					key={year.year}
					onClick={() => this.props.selectYear(year)}
					className="list-group-item">
					{year.year}
				</li>
				);

		});
	}

	renderOptions() {
		return this.props.years.map((year) => {
			return (
				<option 
					value={year.year}
					className="list-group-item">
					{year.year}
				</option>
				);

		});
	}	
	render() {
		return (
				<div>
					<h5>Year</h5>
					<ul className="list-group col-sm-4">
						{this.renderList()}
					</ul>
				</div>
			);
	}

}

function mapStateToProps(state) {
	return {
		years: state.years
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectYear: selectYear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YearList);