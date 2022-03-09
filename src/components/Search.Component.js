import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ListComponent from './List.Component';

const SearchComponent = ({ value, onChange, onSubmit, searchResult }) => {
    return (
        <Container>
            <Row>
                <Col md={10}>
                    {/* search input */}
                    <Form.Group>
                        <Form.Control
                            value={value}
                            onChange={onChange}
                            type='text'
                            placeholder='Pesquisar livro'
                        />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Button onClick={onSubmit}>Pesquisar</Button>
                </Col>
            </Row>
            <ListComponent items={searchResult} />
        </Container>
    );
}

export default SearchComponent;