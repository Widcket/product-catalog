import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import { setProfile } from '../../Products/products.redux';
import NavigationLogo from './NavigationLogo';
import NavigationUserInfo from './NavigationUserInfo';

class Navigation extends PureComponent {
    static propTypes = {
        theme: themeContract
    };

    render() {
        const { getRemValue } = this.props.theme;

        return (
            <nav>
                <style jsx>{`
                    nav {
                        background-color: ${this.props.theme.color.white};
                        height: 7vh;
                        min-height: ${getRemValue(3)};
                        padding: 0 ${getRemValue(2)};
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}</style>
                <NavigationLogo />
                <NavigationUserInfo profile={this.props.profile} />
            </nav>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { setProfile };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Navigation));
