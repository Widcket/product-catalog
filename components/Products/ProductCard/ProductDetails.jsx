import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';

class ProductDetails extends PureComponent {
    static propTypes = {
        theme: themeContract,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="product-details">
                <style jsx>{`
                    div {
                        background-color: ${this.props.theme.color.white};
                    }
                `}</style>
                <ProductCategory text={this.props.category} />
                <ProductName text={this.props.name} />
            </div>
        );
    }
}

export default withTheme(ProductDetails);
