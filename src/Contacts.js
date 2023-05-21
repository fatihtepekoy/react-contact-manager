import React, { useState } from 'react';
import ContactTable from './ContactTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Contacts = ({ contacts, editContact }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleEdit = contact => {
    setSelectedContact(contact);
    handleOpenModal();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSelectedContact(prevContact => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSave = updatedContact => {
    if (!updatedContact.firstName || !updatedContact.lastName || !updatedContact.phoneNumber) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    editContact(updatedContact.id, updatedContact);
    handleCloseModal();
  };

  const renderEditModalBody = () => {
    if (!selectedContact) return null;

    return (
      <form>
        <div className="error-message">{errorMessage}</div>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={selectedContact.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={selectedContact.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" name="phoneNumber" value={selectedContact.phoneNumber} onChange={handleInputChange} />
        </div>
      </form>
    );
  };

  return (
    <div>
      <ContactTable contacts={contacts} handleEdit={handleEdit} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderEditModalBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(selectedContact)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contacts;
