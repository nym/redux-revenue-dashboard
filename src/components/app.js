import React from 'react';
import { Component } from 'react';

import BookList from '../containers/books-list.js';
import YearList from '../containers/years-list.js';
import ProductTable from '../containers/products-table.js';

import BookDetail from '../containers/book-detail.js';
import YearDetail from '../containers/year-detail.js';


export default class App extends Component {
  render() {
    return (
    	<div>
    	    <h4>Revenue Dashboard</h4>
    	    <hr/>
      		<div>
      			<YearList />
      			<YearDetail />
      			<ProductTable />
      		</div>
      	</div>
    );
  }
}
