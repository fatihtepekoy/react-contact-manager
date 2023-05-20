import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactTable from './ContactTable';




const Contacts = ({ contacts }) => {

  const [show, setShow] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(1);

  const selectedContact = contacts[selectedContactId - 1];
  console.log(selectedContact.firstName);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEditModal = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContact.firstName}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const editModal = getEditModal();


  if (show) {
    return (
      <>
        <ContactTable contacts={contacts} setShow={setShow} setSelectedContactId={setSelectedContactId} />
        <div>{editModal}</div>
      </>
    )
  } else {
    return (
      <ContactTable contacts={contacts} setShow={setShow} setSelectedContactId={setSelectedContactId} />
    )
  }

}


export default Contacts