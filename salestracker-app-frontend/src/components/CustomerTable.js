import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { CustomerContext } from "../context/customerContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CustomerTable() {
  const { displayCustomers } = useContext(CustomerContext)



    return (
        <>
        <DropdownButton id="dropdown-item-button" title="Select Salesperson">
          <Dropdown.ItemText>Make Changes to the Database</Dropdown.ItemText>
          <Dropdown.Item as="button" value={"Create Customer"}>Create Customer</Dropdown.Item>
          <Dropdown.Item as="button" value={"Edit Customer"}>Edit Customer</Dropdown.Item>
          <Dropdown.Item as="button" value={"Delete Customer"}>Delete Customer</Dropdown.Item>
        </DropdownButton>
        <hr></hr>
        <Table className="table" striped bordered hover reponsive size="sm" >
        <thead>
          <tr>
            <th>Customer #</th>
            <th>Salesperson</th>
            <th>Customer Name</th>
            <th>Units Sold</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {displayCustomers}
        </tbody>
        </Table>
      </>
    )
}

export default CustomerTable;