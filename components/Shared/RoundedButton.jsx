import React from 'react';
import PropTypes from 'prop-types';

import withTheme, { theme } from '../../utilities/theme';
import { themeContract } from '../../contracts';

const RoundedButton = props => {
    const { getRemValue } = props.theme;

    return (
        <button className="button-rounded" onClick={props.onClick}>
            <style jsx>{`
                button {
                    display: inline-block;
                    padding: ${getRemValue(props.fontSize * 0.7)} 0;
                    min-width: ${props.width};
                    text-align: center;
                    text-decoration: none;
                    font-size: ${getRemValue(props.fontSize)};
                    border: none;
                    outline: none;
                    cursor: pointer;
                    color: ${props.fontColor};
                    background-color: ${props.backgroundColor};
                    border-radius: ${getRemValue(props.fontSize * 2)};
                }
            `}</style>
            {props.label}
        </button>
    );
};

RoundedButton.propTypes = {
    theme: themeContract,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    fontSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string
};

RoundedButton.defaultProps = {
    width: 'auto',
    fontSize: theme.font.sizes[2],
    backgroundColor: theme.color.lightBlues[1],
    fontColor: theme.color.white
};

export default withTheme(RoundedButton);
