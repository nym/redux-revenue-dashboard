import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class ProductTable extends Component {
	renderList() {
		let filter = this.props.year ? this.props.year.year : "all";
		console.log("Filter is" + filter);
		return this.props.products.filter(product => {
			if (filter === 2013) return (product.year == 2013);
			if (filter === 2012) return (product.year == 2012);
			if (filter === 'all') return true;
			return product;
		})
		.map((product) => {
			return (
				<li 
					key={product.id}
					onClick={() => this.props.selectProduct(product)}
					className="list-group-item">
					{product.product}, {product.revenue}, {product.year}
				</li>
				);

		});
	}

	render() {
		return (
				<div className="col-xs-4">
					<h5>Products, {this.props.year ? this.props.year.year: "All"}</h5>
					<ul className="list-group col-sm-4">

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);