import React from "react";
import Table from 'react-bootstrap/Table';
import OrderRow from "./OrderRow";

function InfoTable() {
    return (
        <Table striped bordered hover reponsive size="sm" >
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer</th>
            <th>Address</th>
            <th>State</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Revenue</th>
            <th>Salesperson</th>
            <th>Cancel Order?</th>
          </tr>
        </thead>
        <tbody>
          <OrderRow />
        </tbody>
        </Table>

    )
}

export default InfoTable;