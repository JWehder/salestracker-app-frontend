import React, { createContext, useState, useEffect } from 'react';

const CustomerContext = createContext();

function CustomerProvider( { children }) {
    const [displayForm, setDisplayForm] = useState(false)
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({
        salesperson_id: 0,
        id: 0,
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

    function deleteCustomer() {
        e.preventDefault()
        console.log(customer.id)
    }

    function getCustomer(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/customers/${customer.id}`)
            .then((resp) => resp.json())
            .then((customer) => setCustomer({
                ...customer,
                salesperson_id: customer.id,
                customer_first_name: customer.customer_first_name,
                customer_last_name: customer.customer_last_name,
                units_sold: customer.units_sold,
                revenue: customer.revenue
            }))
        setDisplayForm(!displayForm)
    }

    useEffect(() => {
      fetch('http://localhost:9292/customers')
        .then((resp) => resp.json())
        .then((allCustomers) => setCustomers(allCustomers))
    }, [])

    return <CustomerContext.Provider value={{ displayForm, customers, handleInputChange, customer, getCustomer }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }