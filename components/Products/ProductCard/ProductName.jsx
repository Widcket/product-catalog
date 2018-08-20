import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';

const ProductName = props => (
    <div>
        <style jsx>{`
            div {
                font-size: ${props.theme.font.getSize(props.theme.font.sizes[2])};
                text-align: left;
            }

            @media (max-width: 768px) {
                div {
                    font-size: ${props.theme.font.getSize(props.theme.font.sizes[3])};
                }
            }
        `}</style>
        {props.text}
    </div>
);

ProductName.propTypes = {
    theme: themeContract,
    text: PropTypes.string.isRequired
};

export default withTheme(ProductName);
