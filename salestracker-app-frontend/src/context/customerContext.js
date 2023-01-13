import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

function CustomerProvider( { children }) {
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({
        salesperson_id: 0,
        customer_first_name: "First Name",
        customer_last_name: "Last Name",
        units_sold: 0,
        revenue: 0
    })

    function handleInputChange(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
      fetch('http://localhost:9292/customers')
        .then((resp) => resp.json())
        .then((allCustomers) => setCustomers(allCustomers))
    }, [])
    return <CustomerContext.Provider value={{ customers, handleInputChange }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }