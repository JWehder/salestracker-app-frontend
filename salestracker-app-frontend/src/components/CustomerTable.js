import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import CustomerRow from "./CustomerRow";
import { CustomerContext } from "../context/customerContext";

function CustomerTable() {
  const { customers } = useContext(CustomerContext)

  const displayCustomers = customers.map((customer) => {
    return <CustomerRow customer= {customer} key={customer.customer_first_name}/>
  })

    return (
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

    )
}

export default CustomerTable;