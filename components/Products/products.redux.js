// Actions
const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_PROFILE = 'products/SET_PROFILE';

// Action Creators
export function setProducts(products) {
    return { type: SET_PRODUCTS, payload: products };
}

export function setProfile(profile) {
    return { type: SET_PROFILE, payload: profile };
}

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_PROFILE:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

export default reducer;
