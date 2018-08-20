import React from 'react';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import TogglePill from '../../Shared/TogglePill';

const ProductsSortToolbar = props => {
    const { color, getRemValue } = props.theme;

    return (
        <div className="products-sort-toolbar">
            <style jsx>{`
                :global(.products-sort-toolbar) {
                    display: flex;
                    align-items: center;
                    flex-grow: 1;
                    height: 100%;
                    margin-left: ${getRemValue(1)};
                    border-left: 1px solid ${color.grays[2]};
                }

                :global(.product-sort-toolbar) > img {
                    width: ${getRemValue(2)};
                    cursor: pointer;
                }

                span {
                    color: ${color.grays[1]};
                    margin: 0 ${getRemValue(1)};
                }

                div :global(.pill) {
                    margin-right: ${getRemValue(1)};
                    cursor: pointer;
                }

                @media (max-width: 750px) {
                    div {
                        display: none;
                    }
                }
            `}</style>
            <span>Sort by:</span>
            <TogglePill active>Most recent</TogglePill>
            <TogglePill>Lowest price</TogglePill>
            <TogglePill>Highest price</TogglePill>
        </div>
    );
};

ProductsSortToolbar.propTypes = {
    theme: themeContract
};

export default withTheme(ProductsSortToolbar);
