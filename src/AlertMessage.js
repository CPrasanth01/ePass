import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';


export default function AlertMessage(props) {
    return (
        <>
            {/* <Modal backdrop="static" keyboard={false}> */}
            <Modal>
                <Modal.Header closeButton>
                <Modal.Title>E-Pass Status</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                {props.message}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}> Close</Button>
                <Button variant="primary" onClick={props.continue}>Understood</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
