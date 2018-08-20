import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import initStore from '../utilities/store';

const makeStore = initialState => createStore(reducer, initialState);

class AppWrapper extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

const reduxOptions = {
    debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
};

export default withRedux(initStore, reduxOptions)(AppWrapper);
