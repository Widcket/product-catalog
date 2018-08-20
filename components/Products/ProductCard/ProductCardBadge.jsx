import React from 'react';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';

const ProductCardBadge = props => {
    const { getRemValue } = props.theme;

    return (
        <div className="product-card-badge">
            <style jsx>{`
                :global(.product-card-badge) {
                    position: absolute;
                    top: ${getRemValue(0.5)};
                    right: ${getRemValue(0.5)};
                }
            `}</style>
            {props.children}
        </div>
    );
};

ProductCardBadge.propTypes = {
    theme: themeContract
};

export default withTheme(ProductCardBadge);
