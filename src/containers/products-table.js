import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class ProductTable extends Component {
	renderTable() {
		let yearFilter = this.props.year ? this.props.year.year : "all";
		let productFilter = this.props.product ? this.props.product : "all";

		return this.props.products.filter(product => {
			if (yearFilter === 2013) return (product.year == 2013);
			if (yearFilter === 2012) return (product.year == 2012);
			if (yearFilter === 'all') return true;
			return product;
		})
		.filter(product => {
			if (productFilter != 'all') return (product.product == productFilter);
			if (productFilter == 'all') return true;
			return product;
		})
		.map((product) => {
			return (
				<tr
					key={product.id}
					onClick={() => this.props.selectProduct(product)} >
					<td>{product.country}</td><td>{product.product}</td><td>{product.revenue}</td><td>{product.year}</td>
				</tr>
				);

		});
	}

	render() {
		return (
				<div className="col-xs-4">
					<h5>Revenue Report{this.props.year ? ", " + this.props.year.year: ""}{this.props.product ? ", " + this.props.product: ""}</h5>
					<table className="table table-bordered">
						  <thead>
							<tr>
							  <th>Country</th>
							  <th>Product</th>
							  <th>Revenue</th>
							  <th>Year</th>
							</tr>
						</thead>
						<tbody>
							{this.renderTable()}
						</tbody>
					</table>
				</div>
			);
	}

}

function mapStateToProps(state) {
	return {
		products: state.products,
		year: state.activeYear,
		product: state.activeProduct
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);