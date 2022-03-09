import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ onConfirm, onCancel, show, hide }) => {
    return (
        <Modal closeButton show={show} onHide={hide}>
            <Modal.Header>Excluir Favorito</Modal.Header>
            <Modal.Body>Excluir esse item dos favoritos?</Modal.Body>
            <Modal.Footer>
                <Button variant='danger' onClick={onCancel}>Cancelar</Button>
                <Button variant='success' onClick={onConfirm}>Excluir</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;