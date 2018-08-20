import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducer';

const middlewares = compose(
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
        ? window.devToolsExtension && window.devToolsExtension()
        : f => f
);

const createStoreWithMiddlewares = applyMiddleware()(createStore);
const initStore = initialState => createStoreWithMiddlewares(reducer, initialState, middlewares);

export default initStore;
