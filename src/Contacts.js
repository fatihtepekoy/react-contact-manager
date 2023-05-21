import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactTable from './ContactTable';




const Contacts = ({ contacts, setContacts }) => {


  const [show, setShow] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(1);

  const selectedContact = contacts[selectedContactId - 1];
  let updatedContacts;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveContact = (event) => {
    const contact =
    {
      id: selectedContactId,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phoneNumber: event.target.phoneNumber.value
    }

    updatedContacts = contacts.map(item => {
      if (item.id === selectedContactId) {
        return contact;
      }
      return item;
    });


    setContacts(updatedContacts);

  }


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
          <form onSubmit={saveContact} id="contact-form">
            <label>
              First Name:
              <input type="text" name="firstName" defaultValue={selectedContact.firstName} />
            </label>
            <label>
              Last name:
              <input type="text" name="lastName" defaultValue={selectedContact.lastName} />
            </label>
            <label>
              Phone Number:
              <input type="number" name="phoneNumber" defaultValue={selectedContact.phoneNumber} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" form="contact-form" variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const editModal = getEditModal();

  function getContactPart() {
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

  return contacts.length > 0 ? getContactPart() : null;


}


export default Contacts