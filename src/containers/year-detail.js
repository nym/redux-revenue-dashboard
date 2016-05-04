import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPieGraph from './product-pie-graph';

export default class YearDetail extends Component {
	render() {
		if (!this.props.year) {
			return (
				<div className="col-xs-6">
					<h5>Revenue by Product</h5>
					<ProductPieGraph />
				</div>
			)
		}
		return (
			<div className="col-xs-6">
				<h5>Revenue by Product, {this.props.year.year}</h5>
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