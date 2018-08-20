import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../utilities/theme';
import { themeContract } from '../../contracts';
import Pill from './Pill';

const TogglePill = props => {
    const { color } = props.theme;

    if (props.active) {
        return (
            <Pill backgroundColor={color.lightBlues[0]} fontColor={color.white}>
                {props.children}
            </Pill>
        );
    }

    return <Pill>{props.children}</Pill>;
};

TogglePill.propTypes = {
    theme: themeContract,
    active: PropTypes.bool
};

TogglePill.defaultProps = {
    active: false
};

export default withTheme(TogglePill);
