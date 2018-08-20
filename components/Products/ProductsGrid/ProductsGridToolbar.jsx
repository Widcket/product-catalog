import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import arrowRight from '../../../static/images/arrow-right.svg';

const ProductsGridToolbar = props => {
    const { spaces, color, getRemValue } = props.theme;

    return (
        <div className="product-grid-toolbar">
            <style jsx>{`
                :global(.product-grid-toolbar) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: ${getRemValue(2)};
                    padding: ${getRemValue(spaces[1])} 0;
                    margin: 0 -${props.margin} 0 ${props.margin};
                    border-bottom: 1px solid ${color.grays[2]};
                }

                :global(.product-grid-toolbar) > img {
                    width: ${getRemValue(2)};
                    cursor: pointer;
                }
            `}</style>
            <span>{`${props.currentItems} of ${props.totalItems} products`}</span>
            {props.children}
            <img alt={'Next Page'} src={arrowRight} />
        </div>
    );
};

ProductsGridToolbar.propTypes = {
    theme: themeContract,
    currentItems: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    margin: PropTypes.string.isRequired
};

export default withTheme(ProductsGridToolbar);
