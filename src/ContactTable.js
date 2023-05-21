import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React from 'react';
import Button from 'react-bootstrap/Button';

const ContactTable = ({ contacts, handleEdit }) => {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Phone Number</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <th scope='row'>{contact.id}</th>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phoneNumber}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(contact)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default ContactTable;
