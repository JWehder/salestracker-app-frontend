import React from "react";
import Table from 'react-bootstrap/Table';

function InfoTable() {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        </Table>

    )
}

export default InfoTable;