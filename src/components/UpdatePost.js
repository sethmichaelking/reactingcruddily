import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import UpdateForm from './UpdateForm';

function UpdatePost({handleUpdate, id}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
       <Button variant="secondary" onClick={handleShow} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         }} >
          Update
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateForm id={id} handleUpdate={handleUpdate}/>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default UpdatePost