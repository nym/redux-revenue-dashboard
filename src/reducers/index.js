import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import YearsReducer from './reducer_years';
import ActiveProduct from './reducer_active_product';
import ActiveYear from './reducer_active_year';

const rootReducer = combineReducers({
	years: YearsReducer,
	products: ProductsReducer,
	activeProduct: ActiveProduct,
	activeYear: ActiveYear
});

export default rootReducer;
