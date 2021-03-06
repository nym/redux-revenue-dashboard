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

	render() {
		return (
				<div className="col-md-2">
					<h5>Fiscal Year</h5>
					<ul className="list-group">
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