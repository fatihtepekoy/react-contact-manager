import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactTable from './ContactTable';


const Contacts = ({ contacts, setContacts }) => {

  const [show, setShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleCloseModal = () => setShow(false);
  const handleOpenModal = () => setShow(true);

  const editContact = contact => {
    setSelectedContact(contact);
    handleOpenModal();
  };

  const saveContact = (event) => {
    event.preventDefault(); // Prevent default form submission
    const contactForm = event.target;

    const contact =
    {
      id: selectedContact.id,
      firstName: contactForm.firstName.value,
      lastName: contactForm.lastName.value,
      phoneNumber: contactForm.phoneNumber.value
    }

    const updatedContacts = contacts.map(item => {
      return item.id === selectedContact.id ? contact : item;
    });

    setContacts(updatedContacts);
    handleCloseModal();
  }


  const renderEditModalBody = () => {
    if (!selectedContact) return null;

    return (
      <Modal
        show={show}
        onHide={handleCloseModal}
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" form="contact-form" variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <ContactTable contacts={contacts} editContact={editContact} />
      <div>{renderEditModalBody()}</div>
    </>
  );

}


export default Contacts