import React from 'react';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import logo from '../../../static/images/aerolab-logo.svg';

const NavigationLogo = props => (
    <div>
        <style jsx>{`
            img {
                width: ${props.theme.getRemValue(1.7)};
                object-fit: contain;
            }
        `}</style>
        <img alt={'Logo'} src={logo} />
    </div>
);

NavigationLogo.propTypes = {
    theme: themeContract
};

export default withTheme(NavigationLogo);
