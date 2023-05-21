const ContactForm = ({ contacts, setContacts }) => {

  const addContact = (event) => {
    event.preventDefault(); // Prevent default form submission

    const newContact =
    {
      id: contacts.length + 1,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phoneNumber: event.target.phoneNumber.value
    }

    setContacts([...contacts, newContact]);
  }


  return (
    <form onSubmit={addContact} >
      <label>
        First Name:
        <input type="text" name="firstName" />
      </label>
      <label>
        Last name:
        <input type="text" name="lastName" />
      </label>
      <label>
        Phone Number:
        <input type="number" name="phoneNumber" />
      </label>
      <input type="submit" value="contact" />
    </form>
  )
}

export default ContactForm