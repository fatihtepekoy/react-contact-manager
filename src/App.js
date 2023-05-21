import './styles.css';
import Header from './Header';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import React, { useState, useEffect } from 'react';


function App() {

  const [contacts, setContacts] = useState([]);


  return (
    <div>
      <Header />
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <Contacts contacts={contacts} setContacts={setContacts} />
    </div>
  )
}
export default App;
