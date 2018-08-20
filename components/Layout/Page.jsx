import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import '../../node_modules/normalize.css/normalize.css';

import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Content from './Content/Content';
import withTheme from '../../utilities/theme';
import { themeContract } from '../../contracts';

const Page = props => {
    const { color, font, getRemValue } = props.theme;

    return (
        <Grid fluid>
            <style jsx global>{`
                body {
                    color: ${color.grays[0]};
                    background-color: ${color.grays[4]};
                    font-family: ${font.stack};
                    font-size: ${font.getSize(font.sizes[3])};
                    font-weight: ${font.weights.regular};
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                }

                body .container-fluid,
                body .row,
                div[class*='col-'] {
                    margin-right: 0;
                    margin-left: 0;
                    padding-left: 0;
                    padding-right: 0;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 0;
                    -webkit-margin-before: 0;
                    -webkit-margin-after: 0;
                }

                body .row:last-of-type {
                    margin-bottom: 0.7rem;
                }
            `}</style>
            <Row>
                <Col xs>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Col xs>
                    <Header title={props.title} />
                </Col>
            </Row>
            <Row>
                <Col xs>
                    <Content>{props.children}</Content>
                </Col>
            </Row>
        </Grid>
    );
};

Page.propTypes = {
    theme: themeContract,
    title: PropTypes.string.isRequired
};

export default withTheme(Page);
