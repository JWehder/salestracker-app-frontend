import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import CustomerRow from "./CustomerRow";

function CustomerTable() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/customers')
      .then((resp) => resp.json())
      .then((allCustomers) => setCustomers(allCustomers))
  }, [])

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