import React, { createContext, useState, useEffect } from 'react';
import CustomerRow from '../components/CustomerRow';

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
        revenue: 0,
        salesperson: {}
    })

    function handleInputChange(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    function deleteCustomer(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/customers/${customer.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    function getCustomer(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/customers/${customer.id}`)
            .then((resp) => resp.json())
            .then((customer) => setCustomer({
                ...customer,
                salesperson_id: customer.salesperson_id,
                customer_first_name: customer.customer_first_name,
                customer_last_name: customer.customer_last_name,
                units_sold: customer.units_sold,
                revenue: customer.revenue,
                salesperson: customer.salesperson
            }))
        setDisplayForm(!displayForm)
    }

    useEffect(() => {
      fetch('http://localhost:9292/customers')
        .then((resp) => resp.json())
        .then((allCustomers) => setCustomers(allCustomers))
    }, [])

    const displayCustomers = customers.map((customer) => {
        return <CustomerRow customer= {customer} key={customer.id}/>
    })

    return <CustomerContext.Provider value={{ deleteCustomer, displayForm, customers, handleInputChange, customer, getCustomer, displayCustomers, setCustomers }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }