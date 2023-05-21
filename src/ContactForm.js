// ContactForm.js

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ContactForm = ({ addContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!firstName || !lastName || !phoneNumber) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    addContact(firstName, lastName, phoneNumber);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    handleCloseModal();
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}> Add Contact</Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="error-message">{errorMessage}</div>
            <div>
              <label>
                First Name:
                <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Last Name:
                <input type="text" value={lastName} onChange={event => setLastName(event.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Phone Number:
                <input type="number" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
              </label>
            </div>
            <div>
              <Button variant="secondary" onClick={handleCloseModal}> Cancel </Button>
              <Button type="submit" variant="primary"> Save </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;
