import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const Content = props => (
    <section>
        <Row center="xs">
            <Col xs={10}>{props.children}</Col>
        </Row>
    </section>
);

export default Content;
