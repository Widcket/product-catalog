import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';

class HeaderTitle extends PureComponent {
    static propTypes = {
        theme: themeContract
    };

    render() {
        const { spaces, color, font, getRemValue } = this.props.theme;

        return (
            <div>
                <style jsx>{`
                    div {
                        display: flex;
                        height: 100%;
                    }

                    h1 {
                        text-align: left;
                        align-self: flex-end;
                        font-size: ${font.getSize(font.sizes[5])};
                        font-weight: ${font.weights.bold};
                        color: ${color.white};
                        margin-bottom: ${getRemValue(spaces[2])};
                    }
                `}</style>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

HeaderTitle.propTypes = {
    theme: themeContract,
    title: PropTypes.string.isRequired
};

export default withTheme(HeaderTitle);
