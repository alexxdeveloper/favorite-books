import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const HeaderComponent = () => {
    return (
        <Navbar bg='primary' expand='lg' className='mb-5 shadow fixed-top'>
            <Container>
                <Navbar.Brand className='text-white'>Favorites Books</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;