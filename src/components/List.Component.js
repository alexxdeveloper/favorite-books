import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaExclamationCircle } from 'react-icons/fa'

const ListComponent = ({ items }) => {
    return (
        <div style={{ height: '65vh', overflow: 'auto', paddingRight: '2rem', marginTop: '2rem' }}>
            {
                items.length > 0
                    ? <>
                        <p className='mt-4 text-primary' style={{ marginBottom: '-15px' }}>Resultado da Pesquisa</p>
                        <hr />
                    </>
                    : <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                        <FaExclamationCircle size={64} color="#ccc" />
                        <p className='mt-3'>Nenhum livro pesquisado</p>
                    </div>
            }
            <ListGroup>{items}</ListGroup>
        </div>
    );
}

export default ListComponent;