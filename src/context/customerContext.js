import React, { createContext, useState, useEffect } from 'react';
import CustomerRow from '../components/CustomerRow';

const CustomerContext = createContext();

function CustomerProvider( { children } ) {

    const [displayForm, setDisplayForm] = useState(false)
    const [customers, setCustomers] = useState([])
    const [currentCustomers, setCurrentCustomers] = useState([])
    const [customer, setCustomer] = useState({
        salesperson_id: 0,
        id: 0,
        customer_first_name: "",
        customer_last_name: "",
        units_sold: 0,
        revenue: 0,
        salesperson: {}
    })

    const rev_total = currentCustomers.reduce((accumulator, customer) => {
        return accumulator += customer.revenue
    }, 0)
    
    useEffect(() => {
        fetch('http://localhost:9292/customers')
          .then((resp) => resp.json())
          .then((allCustomers) => {
            setCustomers(allCustomers)
            setCurrentCustomers(allCustomers)
        })
      }, [])

    function getSalespersonForCustomer(id) {
        const customer = customers.find((customer) => customer.salesperson_id === id)
        setCustomer({
            ...customer,
            salesperson: {...customer.salesperson}
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
            .then((customers) => {
                setCustomers(customers)
                setCurrentCustomers(customers)
            })
    }

    function createCustomer(e) {
        e.preventDefault()
        const newCustomer = {
            salesperson_id: customer.salesperson.id,
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
            .then((customer) => {
                setCustomers([...customers, customer])
                setCurrentCustomers([...currentCustomers, customer])
            })
    }

    function editCustomer(e) {
        e.preventDefault()
        const editedCustomer = {
            id: customer.id,
            salesperson_id: customer.salesperson.id,
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
            .then((customers) => {
                setCustomers(customers)
                setCurrentCustomers(customers)
            })

    }

    function getCustomer(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/customers/${customer.id}`)
            .then((resp) => resp.json())
            .then((receivedCustomer) => setCustomer({
                ...customer,
                salesperson_id: receivedCustomer.salesperson_id,
                customer_first_name: receivedCustomer.customer_first_name,
                customer_last_name: receivedCustomer.customer_last_name,
                units_sold: receivedCustomer.units_sold,
                revenue: receivedCustomer.revenue,
                salesperson: {...receivedCustomer.salesperson}
            }))
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

    return <CustomerContext.Provider value={{ deleteCustomer, displayForm, customers, handleInputChange, customer, getCustomer, displayCustomers, setCustomers, setCustomer, createCustomer, getSalespersonForCustomer, editCustomer, rev_total, currentCustomers, setCurrentCustomers }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }