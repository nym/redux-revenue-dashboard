export function selectProduct(product) {
	console.log("Product has been selected", product);

	return {
		type: 'PRODUCT_SELECTED',
		payload: product
	}
}

export function selectYear(year) {
	console.log("Year has been selected");

	return {
		type: 'YEAR_SELECTED',
		payload: year
	}
}
