import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';

// Based on stackoverflow groupBy reducer
let revenueSumByKey = function(xs, key) {
	return xs.reduce(function(rv, x) {
		(rv[x[key]] = rv[x[key]] || 0);
		rv[x[key]] = rv[x[key]] + x.revenue;
		return rv;
	}, {});
};

export default class ProductPieGraph extends Component {
	aggregateProducts() {
		let filter = this.props.year ? this.props.year.year : 'all';
		let filtered = this.props.products.filter(product => {
				if (filter === 2013) return (product.year == 2013);
				if (filter === 2012) return (product.year == 2012);
				if (filter === 'all') return true;
				return product;
		});
		let grouped = revenueSumByKey(filtered, "product");
		let groupedArray = [];
		Object.keys(grouped).forEach((key) => {
			let val = grouped[key];
			groupedArray.push({name: key, revenue: val});
		})
		return groupedArray;
	}

	renderList(aggregate) {
		return aggregate.map((product) => {
			return (
				<li 
					key={product.product}
					onClick={() => this.props.selectProduct(product.name)}
					className="list-group-item">
					{product.name}: ${product.revenue}
				</li>
				);

		});
	}

	render() {
		let aggregate = this.aggregateProducts();
		let labels = aggregate.map((product) => (product.name));
		let series = aggregate.map((product) => (product.revenue));

		let data = {
		  labels: labels,
		  series: series
		};

		let options = {
		  labelInterpolationFnc: function(value) {
		    return value[0]
		  },
		  height: "300px"
		};

		let responsiveOptions = [
		  ['screen and (min-width: 640px)', {
		    chartPadding: 0,
		    labelOffset: 10,
		    labelDirection: 'explode',
		    labelInterpolationFnc: function(value) {
		      return value;
		    }
		  }],
		  ['screen and (min-width: 1024px)', {
		    labelOffset: 80,
		    chartPadding: 10
		  }]
		];


		return (
				<div>
					<ChartistGraph data={data} options={options} type={'Pie'} responsive-options={responsiveOptions} />
					<ul className="list-group">
						{this.renderList(aggregate)}
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