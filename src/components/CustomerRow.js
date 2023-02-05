import React from "react";


function CustomerRow({ customer }) {
    

    return (
        <>
            <tr>
                <td>{customer.id}</td>
                <td>{customer.salesperson_first_name} {customer.salesperson_last_name}</td>
                <td>{customer.customer_first_name} {customer.customer_last_name}</td>
                <td>{customer.units_sold}</td>
                <td>{customer.revenue}</td>
            </tr>
        </>

    )
}

export default CustomerRow;