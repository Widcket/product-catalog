import React from 'react';
import { connect } from 'react-redux';

import withTheme from '../../utilities/theme';
import ProductsGrid from './ProductsGrid/ProductsGrid';
import { themeContract, productsContract } from '../../contracts';
import { setProducts, setProfile } from './products.redux';

const Products = props => {
    const { spaces, getRemValue } = props.theme;
    const gutter = spaces[1];

    return (
        <section>
            <style jsx>{`
                section {
                    margin: ${getRemValue(spaces[2] - gutter / 2)} -${getRemValue(gutter / 2)};
                }
            `}</style>
            <ProductsGrid products={props.products} profile={props.profile} gutter={gutter} />
        </section>
    );
};

Products.propTypes = {
    theme: themeContract,
    products: productsContract
};

const mapStateToProps = state => state;
const mapDispatchToProps = { setProducts, setProfile };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Products));
