import React from 'react';
import PropTypes from 'prop-types';

import withTheme, { theme } from '../../utilities/theme';
import { themeContract } from '../../contracts';

const Pill = props => {
    const { getRemValue } = props.theme;

    return (
        <div className="pill">
            <style jsx>{`
                div {
                    display: inline-block;
                    height: ${getRemValue(2)};
                    padding: 0 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: ${props.fontColor};
                    background-color: ${props.backgroundColor};
                    border-radius: ${getRemValue(0.9)};
                }
            `}</style>
            {props.children}
        </div>
    );
};

Pill.propTypes = {
    theme: themeContract,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string
};

Pill.defaultProps = {
    backgroundColor: theme.color.grays[3],
    fontColor: theme.color.grays[1]
};

export default withTheme(Pill);
