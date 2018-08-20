import React from 'react';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';

const ProductCardOverlayBackground = props => {
    const { color } = props.theme;

    return (
        <div className="product-card-overlay-background">
            <style jsx>{`
                div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background: linear-gradient(to top, ${color.lightBlues[0]} 0%, ${color.lightBlues[1]} 100%);
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

ProductCardOverlayBackground.propTypes = {
    theme: themeContract
};

export default withTheme(ProductCardOverlayBackground);
