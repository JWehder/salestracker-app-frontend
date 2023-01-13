import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

function CustomerProvider( { children }) {
    const [salespeople, setSalespeople] = useState([])
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({
        salesperson_id: 0,
        customer_first_name: "First Name",
        customer_last_name: "Last Name",
        units_sold: 0,
        revenue: 0
    })

    useEffect(() => {
      fetch('http://localhost:9292/customers')
        .then((resp) => resp.json())
        .then((allCustomers) => setCustomers(allCustomers))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    return <CustomerContext.Provider value={{ salespeople, customers }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }