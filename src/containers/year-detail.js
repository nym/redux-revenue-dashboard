import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPieGraph from './product-pie-graph';

export default class YearDetail extends Component {
	render() {
		if (!this.props.year) {
			return (
				<div className="col-xs-4">No active year</div>
			)
		}
		return (
			<div className="col-xs-4">
				Year: {this.props.year.year}

				<ProductPieGraph />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		year: state.activeYear
	}

}

export default connect(mapStateToProps)(YearDetail)