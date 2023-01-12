import React from "react";


function CustomerRow({ customer }) {

    return (
        <>
            <tr>
                <td>{customer.id}</td>
                <td>{customer.salesperson.first_name} {customer.salesperson.last_name}</td>
                <td>{customer.customer_first_name} {customer.customer_last_name}</td>
                <td>{customer.units_sold}</td>
                <td>{customer.revenue}</td>
            </tr>
        </>

    )
}

export default CustomerRow;