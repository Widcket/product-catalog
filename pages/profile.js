import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsAPI from '../services/api';
import Page from '../components/Layout/Page';
import Profile from '../components/Profile/Profile';
import { setProfile } from '../components/Products/products.redux';

class ProfilePage extends Component {
    static async getInitialProps({ store }) {
        const api = new ProductsAPI();

        const request = await api.getProfile();
        const profile = await request.json();

        store.dispatch(setProfile(profile));
    }

    render() {
        return (
            <Page title="Profile">
                <Profile />
            </Page>
        );
    }
}

export default connect()(ProfilePage);
