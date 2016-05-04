import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ProductsReducer from './reducer_products';
import YearsReducer from './reducer_years';
import ActiveBook from './reducer_active_book';
import ActiveProduct from './reducer_active_product';
import ActiveYear from './reducer_active_year';

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook,
	years: YearsReducer,
	products: ProductsReducer,
	activeProduct: ActiveProduct,
	activeYear: ActiveYear
});

export default rootReducer;
