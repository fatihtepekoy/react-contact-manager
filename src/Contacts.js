import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useContext } from 'react';
import MyContext from './App';


const Contacts = ({ contacts }) => {

  console.log(contacts);

  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Phone Number</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <th scope='row' >{contact.id}</th>
              <td >{contact.firstName}</td>
              <td >{contact.lastName}</td>
              <td >{contact.phoneNumber}</td>
            </tr>
          )
        })}
      </MDBTableBody>
    </MDBTable>
  )
}

export default Contacts