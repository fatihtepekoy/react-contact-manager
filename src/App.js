import './styles.css';
import Header from './Header';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import React, { useState, createContext } from 'react';




function App() {

  const MyContext = createContext();

  const firstContact = [
    {
      id: 1,
      firstName: "Fatih",
      lastName: "Tepekoy",
      phoneNumber: "5332109104"
    }
  ]

  const [contacts, setContacts] = useState(firstContact);



  return (
    <div>
      <Header />
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <Contacts contacts={contacts} />
    </div>
  )
}
export default App;
