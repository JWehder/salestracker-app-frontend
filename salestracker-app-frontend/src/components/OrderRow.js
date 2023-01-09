import React from "react";
import Button from 'react-bootstrap/Button';


function InfoRow() {

    return (
        <>
            <tr>
            <td>Order Number</td>
            <td>Salesperson</td>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Revenue</td>
            <td><Button variant="danger">Cancel Order -</Button></td>
            </tr>
        </>

    )
}

export default InfoRow