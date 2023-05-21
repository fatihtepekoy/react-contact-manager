import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ContactTable = ({ contacts, editContact }) => {

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
              <td > <Button onClick={() => editContact(contact)} variant="primary">Edit</Button>{''} </td>
            </tr>
          )
        })}
      </MDBTableBody>
    </MDBTable>
  );
}



export default ContactTable