import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.id}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.year}
				</li>
				);

		});
	}

	renderOptions() {
		return this.props.books.map((book) => {
			return (
				<option 
					value={book.year}
					className="list-group-item">
					{book.year}
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
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);