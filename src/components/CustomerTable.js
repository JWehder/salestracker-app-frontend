import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import { CustomerContext } from "../context/customerContext";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { SalesContext } from "../context/salesContext";

function CustomerTable() {
  const { displayCustomers } = useContext(CustomerContext)
  const { salespeopleDropdownItems, getSalesperson } = useContext(SalesContext)

    return (
        <>
        <hr></hr>
        <DropdownButton defaultValue="All" id="dropdown-item-button" title="Select Salesperson">
          <Dropdown.ItemText>Display a Saleperson's Customers</Dropdown.ItemText>
          <Dropdown.Divider></Dropdown.Divider>
          <Dropdown.Item onClick={(e) => getSalesperson(e.target.value)} as="button" value="All">All</Dropdown.Item>
          {salespeopleDropdownItems}
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