import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsAPI from '../services/api';
import Page from '../components/Layout/Page';
import Products from '../components/Products/Products';
import { setProducts, setProfile } from '../components/Products/products.redux';

class ProductsPage extends Component {
    static async getInitialProps({ store }) {
        const api = new ProductsAPI();

        const productsResponse = await api.getProducts();
        const products = await productsResponse.json();
        const profileResponse = await api.getProfile();
        const profile = await profileResponse.json();

        store.dispatch(setProducts(products));
        store.dispatch(setProfile(profile));
    }

    render() {
        return (
            <Page title="Electronics">
                <Products products={this.props.products} />
            </Page>
        );
    }
}

export default connect()(ProductsPage);
