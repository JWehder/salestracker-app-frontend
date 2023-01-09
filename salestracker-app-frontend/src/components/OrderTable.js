import React from "react";
import Table from 'react-bootstrap/Table';

function InfoTable() {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Salesperson</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Quantity Price</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        </Table>

    )
}

export default InfoTable;