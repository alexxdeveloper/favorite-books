import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaExclamationCircle } from 'react-icons/fa'

const ListComponent = ({ items }) => {
    return (
        <>
            {
                items.length > 0
                    ? <>
                        <p className='mt-5 text-primary' style={{ marginBottom: '-15px' }}>Resultado da Pesquisa</p>
                        <hr />
                    </>
                    : <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                        <FaExclamationCircle size={64} color="#ccc" />
                        <p className='mt-3'>Nenhum livro pesquisado</p>
                    </div>
            }
            <ListGroup>{items}</ListGroup>
        </>
    );
}

export default ListComponent;