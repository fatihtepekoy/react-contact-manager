import './styles.css';
import React, { useState } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (firstName, lastName, phoneNumber) => {
    const newContact = {
      id: contacts.length + 1,
      firstName,
      lastName,
      phoneNumber
    };
    setContacts([...contacts, newContact]);
  };

  const editContact = (id, updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div>
      <Header />
      <ContactForm addContact={addContact} />
      <Contacts contacts={contacts} editContact={editContact} />
    </div>
  );
}

export default App;
