import React from 'react'
import { Button } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight, } from 'react-icons/fa'

const PaginationComponent = ({ onAdd, onRemove }) => {
    return (
        <div className='d-flex flex-row mt-4 align-content-center justify-content-center'>
            <Button onClick={onRemove}>
                Anterior
                <FaAngleDoubleLeft />
            </Button>
            <Button style={{ marginLeft: '0.5rem' }} onClick={onAdd}>
                Próxima
                <FaAngleDoubleRight />
            </Button>
        </div>
    );
}

export default PaginationComponent;