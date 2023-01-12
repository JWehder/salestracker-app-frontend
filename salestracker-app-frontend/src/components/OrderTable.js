import React from "react";
import Table from 'react-bootstrap/Table';
import OrderRow from "./OrderRow";

function InfoTable() {
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

export default InfoTable;