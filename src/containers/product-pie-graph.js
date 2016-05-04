import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

let groupBy = function(xs, key) {
	return xs.reduce(function(rv, x) {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
};

export default class ProductPieGraph extends Component {
	renderList() {
		let filter = this.props.year ? this.props.year.year : 'all';
		let filtered = this.props.products.filter(product => {
				if (filter === 2013) return (product.year == 2013);
				if (filter === 2012) return (product.year == 2012);
				if (filter === 'all') return true;
				return product;
		});
		let grouped = groupBy(filtered, "product");
		let groupedArray = [];
		Object.keys(grouped).forEach((key) => {
			let val = grouped[key];
			groupedArray.push({product: key, data: val});
		})

		return groupedArray.map((product) => {
			return (
				<li 
					key={product.product}
					onClick={() => this.props.selectProduct(product)}
					className="list-group-item">
					{product.product}
				</li>
				);

		});

		return this.props.products.map((product) => {
			return (
				<li 
					key={product.id}
					onClick={() => this.props.selectProduct(product)}
					className="list-group-item">
					{product.product}
				</li>
				);

		});
	}

	render() {
		return (
				<div className="col-xs-4">
					<h5>Products</h5>
					<ul className="list-group">
						{this.renderList()}
					</ul>
				</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		products: state.products,
		year: state.activeYear
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPieGraph);