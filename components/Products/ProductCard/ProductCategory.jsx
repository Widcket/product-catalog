import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';

const ProductCategory = props => (
    <div>
        <style jsx>{`
            div {
                color: ${props.theme.color.grays[1]};
                font-size: ${props.theme.font.getSize(props.theme.font.sizes[1])};
                text-align: left;
            }

            @media (max-width: 767px) {
                div {
                    font-size: ${props.theme.font.getSize(props.theme.font.sizes[2])};
                }
            }
        `}</style>
        {props.text}
    </div>
);

ProductCategory.propTypes = {
    theme: themeContract,
    text: PropTypes.string.isRequired
};

export default withTheme(ProductCategory);
