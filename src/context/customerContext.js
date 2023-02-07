import React, { createContext, useState, useContext } from 'react';
import { SalesContext } from './salesContext';
import CustomerRow from '../components/CustomerRow';

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
    const [show, setShow] = useState(false)
    const { salespeople, setSalespeople, currentCustomers, setCurrentCustomers } = useContext(SalesContext)
    const [displayForm, setDisplayForm] = useState(false)
    const [customer, setCustomer] = useState({...defaultCustomerForm})

    // const rev_total = currentCustomers.reduce((accumulator, customer) => {
    //    return accumulator += customer.revenue
    // }, 0)

    function getSalespersonForCustomer(customerNumber, salespersonId) {
            const salesperson = salespeople.find((salesperson) => salesperson.id === salespersonId)
        if (salesperson) {
            const foundCustomer = salesperson.customers.find((cust) => cust.id == customerNumber)
            setCustomer({
                ...foundCustomer,
                salesperson_first_name: salesperson.first_name,
                salesperson_last_name: salesperson.last_name
            })
            setDisplayForm(!displayForm)
        } else {
            return (
                setShow(true)
            )
        }
    }

    function addCustomer(newCustomer) {
        let salesperson = salespeople.find((salesperson) => salesperson.id === newCustomer.salesperson_id)
        salesperson = {...salesperson, customers: [...salesperson.customers, newCustomer]}
        const filteredSalespeople = salespeople.filter((salesperson) => salesperson.id !== customer.salesperson_id)
        const newSalespeople = [...filteredSalespeople, salesperson]
        const formattedNewCustomer = {
            ...newCustomer, 
            salesperson_first_name:salesperson.first_name, salesperson_last_name: salesperson.last_name
        }
        setSalespeople(newSalespeople)
        setCurrentCustomers([...currentCustomers, formattedNewCustomer])
        setCustomer({...defaultCustomerForm})
    }

    function addEditedCustomer(salespersonId, salespersonsCustomers) {
        let salesperson = salespeople.find((salesperson) => salesperson.id === salespersonId)
        salesperson = {...salesperson, customers: [...salespersonsCustomers]}
        const filteredSalespeople = salespeople.filter((salesperson) => salesperson.id !== customer.salesperson_id)
        const newSalespeople = [...filteredSalespeople, salesperson]
        const filteredCurrentCustomers = currentCustomers.filter((cust) => cust.id !== customer.id)
        const newCurrentCustomers = [...filteredCurrentCustomers, customer]
        setCurrentCustomers(newCurrentCustomers)
        setSalespeople(newSalespeople)
        setCustomer({...defaultCustomerForm})
        setDisplayForm(!displayForm)

    }

    function removeDeletedCustomer(nonDeletedCustomers) {
        let salesperson = salespeople.find((salesperson) => salesperson.id === nonDeletedCustomers[0].salesperson_id)
        salesperson = {...salesperson, customers: [...nonDeletedCustomers]}
        const filteredSalespeople = salespeople.filter((salesperson) => salesperson.id !== nonDeletedCustomers[0].salesperson_id)
        const newSalespeople = [...filteredSalespeople, salesperson]
        const filteredCurrentCustomers = currentCustomers.filter((cust) => cust.id != customer.id)
        setSalespeople(newSalespeople)
        setCurrentCustomers(filteredCurrentCustomers)
        setCustomer({...defaultCustomerForm})
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
            .then(removeDeletedCustomer)
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
            .then(addCustomer)
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
            .then((salespersonsCustomers) => addEditedCustomer(editedCustomer.salesperson_id, salespersonsCustomers))
    }


    function handleInputChange(e) {
        if (e.target.name === "salesperson_id") {
            const salesperson = salespeople.find((salesperson) => salesperson.id == parseInt(e.target.value))
            setCustomer({
                ...customer,
                [e.target.name]: salesperson.id,
                salesperson_first_name: salesperson.first_name,
                salesperson_last_name: salesperson.last_name
            })
        } else {
            setCustomer({
                ...customer,
                [e.target.name]: e.target.value
            })
        }
    }

    const displayCustomers = currentCustomers.map((customer) => {
        return <CustomerRow customer= {customer} key={customer.id}/>
    })

    // displayCustomers, customers, setCustomers, rev_total, currentCustomers, setCurrentCustomers

    return <CustomerContext.Provider value={{ deleteCustomer, displayForm, handleInputChange, customer, setCustomer, createCustomer, getSalespersonForCustomer, editCustomer, defaultCustomerForm, displayCustomers, show, setShow }}>{children}</CustomerContext.Provider>
}

export { CustomerProvider, CustomerContext }