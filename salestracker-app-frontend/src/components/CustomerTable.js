import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import OrderRow from "./CustomerRow";

function CustomerTable() {
  const [salespeople, setSalespeople] = useState([])
  const []

  useEffect(() => {
    fetch('http://localhost:9292/salespeople')
      .then((resp) => resp.json())
      .then((data) => setSalespeople(data))
  }, [])

  useEffect(() => {
    
  })

  const displayCustomers = salespeople.map((salesperson) => {
    
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
          <OrderRow />
        </tbody>
        </Table>

    )
}

export default CustomerTable;