import React, { useEffect } from 'react'
import { Card, Container, Nav } from 'react-bootstrap';
import { FaSearch, FaHeart } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom'

const MenuComponent = () => {

    // retrieve the current route
    let location = useLocation()

    useEffect(() => {
        console.log(location);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Card className='shadow'>
                <Card.Body>
                    <Card.Title>Menu</Card.Title>
                    <Nav className='flex-column'>
                        <Nav.Item className='mb-2'>
                            {
                                location.pathname === '/'
                                    ?
                                    <Link to="/" className='text-prinary' style={{ textDecoration: "none" }}>
                                        <FaSearch />&nbsp;&nbsp;
                                        Pesquisar
                                    </Link>
                                    :
                                    <Link to="/" className='text-secondary' style={{ textDecoration: "none" }}>
                                        <FaSearch />&nbsp;&nbsp;
                                        Pesquisar
                                    </Link>
                            }
                        </Nav.Item>
                        <Nav.Item>
                            {
                                location.pathname === '/favorites'
                                    ?
                                    <Link to="/favorites" className='text-primary' style={{ textDecoration: "none" }}>
                                        <FaHeart />&nbsp;&nbsp;
                                        Favoritos
                                    </Link>
                                    :
                                    <Link to="/favorites" className='text-secondary' style={{ textDecoration: "none" }}>
                                        <FaHeart />&nbsp;&nbsp;
                                        Favoritos
                                    </Link>
                            }
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MenuComponent;