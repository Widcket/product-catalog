import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import withTheme from '../../../utilities/theme';
import { themeContract, productsContract, profileContract } from '../../../contracts';
import ProductCard from '../ProductCard/ProductCard';
import ProductsGridToolbar from './ProductsGridToolbar';
import ProductsSortToolbar from './ProductsSortToolbar';

class ProductsGrid extends Component {
    static propTypes = {
        theme: themeContract,
        products: productsContract,
        profile: profileContract,
        pageSize: PropTypes.number.isRequired,
        gutter: PropTypes.number.isRequired
    };

    static defaultProps = {
        pageSize: 12
    };

    onCardClick = () => {
        console.log('Clicked card!!!');
    };

    getProducts() {
        return this.props.products.map(product => (
            <Col xs={12} sm={6} md={3} lg={2} key={product._id} className="product-wrapper">
                <ProductCard product={product} profile={this.props.profile} onClick={this.onCardClick} />
            </Col>
        ));
    }

    render() {
        if (this.props.products.length === 0) return null;

        const { getRemValue } = this.props.theme;
        const margin = getRemValue(this.props.gutter / 2);
        const productCount = this.props.products.length;

        return (
            <div>
                <style jsx>{`
                    :global(.products-cards) {
                        margin: 1.3rem -${margin};
                    }

                    :global(div.product-wrapper) {
                        margin: ${margin};
                    }
                `}</style>
                <Row>
                    <ProductsGridToolbar currentItems={productCount} totalItems={productCount} margin={margin}>
                        <ProductsSortToolbar />
                    </ProductsGridToolbar>
                </Row>
                <Row className="products-cards">{this.getProducts()}</Row>
                <Row>
                    <ProductsGridToolbar currentItems={productCount} totalItems={productCount} margin={margin} />
                </Row>
            </div>
        );
    }
}

export default withTheme(ProductsGrid);
