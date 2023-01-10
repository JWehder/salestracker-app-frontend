import React from "react";
import Button from 'react-bootstrap/Button';


function InfoRow() {

    return (
        <>
            <tr>
            <td>Order</td>
            <td>Jake Jacobson</td>
            <td>5700 Valley Park Dr</td>
            <td>Louisville</td>
            <td>KY</td>
            <td>8</td>
            <td>9</td>
            <td>$72</td>
            <td><Button className="cancel" size= "small" variant="danger">Cancel Order -</Button></td>
            </tr>
        </>

    )
}

export default InfoRow