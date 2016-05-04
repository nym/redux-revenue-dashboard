import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return (
				<div>No active book</div>
			)
		}
		return (
			<div>Active: {this.props.book.year}</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}

}

export default connect(mapStateToProps)(BookDetail)