import React, { createContext, useState, useEffect, useContext } from 'react';
import CustomerRow from '../components/CustomerRow';
import { SalesContext } from './salesContext';

const CustomerContext = createContext();

function CustomerProvider( { children } ) {
    const defaultCustomerForm = {
        salesperson_id: 0,
        id: 0,
        customer_first_name: "",
        customer_last_name: "",
        units_sold: 0,
        revenue: 0,
        salesperson_first_name: "",
        salesperson_last_name: ""
    }
    const { salespeople, setSalespeople, currentCustomers } = useContext(SalesContext)
    const [displayForm, setDisplayForm] = useState(false)
    const [customer, setCustomer] = useState({...defaultCustomerForm})



    // const rev_total = currentCustomers.reduce((accumulator, customer) => {
    //    return accumulator += customer.revenue
    // }, 0)

    function getSalespersonForCustomer(customerNumber, salespersonId) {
        const salesperson = salespeople.find((salesperson) => salesperson.id === salespersonId)
        const customer = salesperson.customers.find((customer) => customer.id === customerNumber)
        setCustomer({
            ...customer,
            salesperson_first_name: salesperson.first_name,
            salesperson_last_name: salesperson.last_name
        })
    }

    function deleteCustomer(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/customers/${customer.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer.id)
        })
            .then((resp) => resp.json())
            .then((salesperson) => {
                setSalespeople([...salespeople, salesperson])
            })
    }

    function createCustomer(e) {
        e.preventDefault()
        const newCustomer = {
            salesperson_id: customer.salesperson_id,
            customer_first_name: customer.customer_first_name,
            customer_last_name: customer.customer_last_name,
            units_sold: customer.units_sold,
            revenue: customer.revenue
        }
        fetch('http://localhost:9292/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer),
        })
            .then((resp) => resp.json())
            .then((salesperson) => {
                setSalespeople([...salespeople, salesperson])
                setCustomer({...defaultCustomerForm})
            })
    }

    function editCustomer(e) {
        e.preventDefault()
        const editedCustomer = {
            id: customer.id,
            salesperson_id: customer.salesperson_id,
            customer_first_name: customer.customer_first_name,
            customer_last_name: customer.customer_last_name,
            units_sold: customer.units_sold,
            revenue: customer.revenue
        }
        fetch(`http://localhost:9292/customers/${editedCustomer.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedCustomer),
        })
            .then((resp) => resp.json())
            .then((salesperson) => {
                setSalespeople([...salespeople, salesperson])
            })
    }

    function getCustomer(e) {
        e.preventDefault()
        // fetch(`http://localhost:9292/customers/${customer.id}`)
        //     .then((resp) => resp.json())
        //     .then((receivedCustomer) => setCustomer({
        //         ...customer,
        //         salesperson_id: receivedCustomer.salesperson_id,
        //         customer_first_name: receivedCustomer.customer_first_name,
        //         customer_last_name: receivedCustomer.customer_last_name,
        //         units_sold: receivedCustomer.units_sold,
        //         revenue: receivedCustomer.revenue,
        //         salesperson: {...receivedCustomer.salesperson}
        //     }))

        setDisplayForm(!displayForm)
    }

    function handleInputChange(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const displayCustomers = currentCustomers.map((customer) => {
        return <CustomerRow customer= {customer} key={customer.id}/>
    })

    // displayCustomers, customers, setCustomers, rev_total, currentCustomers, setCurrentCustomers

    return <CustomerContext.Provider value={{ deleteCustomer, displayForm, handleInputChange, customer, getCustomer, setCustomer, createCustomer, getSalespersonForCustomer, editCustomer, displayCustomers, defaultCustomerForm }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }