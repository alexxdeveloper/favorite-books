import React from 'react'
import { ListGroupItem, Image, Col, Row, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const ListItemComponent = ({ title, img, description, onAdd, onRemove }) => {

    const location = useLocation()

    return (
        <ListGroupItem>
            <Row>
                <Col xs={2} md={2}>
                    <Image thumbnail={true} src={img} alt="Imagem indisponível" />
                </Col>
                <Col xs={2} md={10}>
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <div className='d-flex flex-row justify-content-end align-items-center'>
                        {
                            location.pathname === '/'
                                ?
                                <Button size='sm' onClick={onAdd}>
                                    Favoritar&nbsp;&nbsp;
                                    <FaPlus />
                                </Button>
                                :
                                <Button size='sm' variant='danger' onClick={onRemove}>
                                    Remover&nbsp;&nbsp;
                                    <FaPlus />
                                </Button>
                        }
                    </div>
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default ListItemComponent;