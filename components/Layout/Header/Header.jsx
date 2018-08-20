import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import HeaderTitle from './HeaderTitle';

class Header extends PureComponent {
    static propTypes = {
        theme: themeContract,
        title: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props.theme;

        return (
            <header>
                <style jsx>{`
                    header :global(.row),
                    header :global(.header-title-wrapper) {
                        height: 100%;
                    }

                    header {
                        background: url(/static/images/header-x1.png);
                        background-color: ${color.lightBlues[2]};
                        background-position: right;
                        background-repeat: no-repeat;
                        background-size: contain;
                        height: 40vh;
                    }

                    @media (max-width: 420px) {
                        header {
                            background-position: center;
                            background-size: cover;
                        }
                    }

                    @media (min-width: 2476px) {
                        header {
                            background: url(/static/images/header-x2.png);
                        }
                    }
                `}</style>
                <Row center="xs">
                    <Col xs={10} className="header-title-wrapper">
                        <HeaderTitle title={this.props.title} />
                    </Col>
                </Row>
            </header>
        );
    }
}

export default withTheme(Header);
