import './styles.css';
import Header from './Header';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import React, { useState, useEffect } from 'react';




function App() {

  var firstContact =
  {
    id: 1,
    firstName: "Fatih",
    lastName: "Tepekoy",
    phoneNumber: "5332109104"
  }



  // Run! Like go get some data from an API.
  const [contacts, setContacts] = useState([firstContact]);

  // useEffect(() => {
  //   setContacts(firstContact);
  // }, []);




  return (
    <div>
      <Header />
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <Contacts contacts={contacts} setContacts={setContacts} />
    </div>
  )
}
export default App;
