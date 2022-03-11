import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MainLayout = ({ columnLeft, columnRight }) => {
    return (
        <Container style={{ marginTop: '6rem' }}>
            <Row>
                <Col md={3}>{columnLeft}</Col>
                <Col md={9}>{columnRight}</Col>
            </Row>
        </Container>
    );
}

export default MainLayout;