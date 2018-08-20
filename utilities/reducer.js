import productsReducer from '../components/Products/products.redux';
import profileReducer from '../components/Profile/profile.redux';

// We could use redux's combineReducers, but the profile data would en up duplicated in the store
const reducer = (state, action) => {
    return Object.assign({}, productsReducer(state, action), profileReducer(state, action));
};

export default reducer;
