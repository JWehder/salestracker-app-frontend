import React, { createContext, useState, useEffect, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomerRow from '../components/CustomerRow';

const SalesContext = createContext();

function SalesProvider( { children }) {
    const defaultForm = {
        first_name: "",
        last_name: "",
        quota: 0,
        customers: []
    }

    const [salespersonId, setSalespersonId] = useState(0)
    const [salespeople, setSalespeople] = useState([])
    const [currentSalesperson, setCurrentSalesperson] = useState({...defaultForm})
    const [selectedSalesperson, setSelectedSalesperson] = useState("All")
    const [currentCustomers, setCurrentCustomers] = useState([])


    const quota_total = salespeople.reduce((accumulator, salesperson) => {
        if (currentSalesperson.quota === 0) {
            return accumulator += salesperson.quota
        } else {
            return accumulator += currentSalesperson.quota
        }
    }, 0)

    function getCustomersForSalesperson(value) {
        if (value === "All") {
            getCustomers(salespeople)
        } else {
            const salesperson = salespeople.find((salesperson) => salesperson.id === parseInt(value))
            const customers = salesperson.customers.map((customer) => {
                customer = {
                    ...customer, 
                    salesperson_first_name: salesperson.first_name,
                    salesperson_last_name: salesperson.last_name
                }
                return customer
            })
            setCurrentCustomers(customers)
            
        }
    }

    const getCustomers = (salespeople) => {
        let allCustomers = []
        salespeople.forEach((salesperson) => {
            if (salesperson.customers.length > 0) {
                salesperson.customers.forEach((customer) => {
                    customer = {
                        ...customer, 
                        salesperson_first_name: salesperson.first_name, 
                        salesperson_last_name: salesperson.last_name
                    }
                    allCustomers = [...allCustomers, customer]
                })
            }
        })
        setCurrentCustomers(allCustomers)
    }

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => {
                setSalespeople(salespeople)
                getCustomers(salespeople)
            })
    }, [])

    function createSalesperson(e) {
        e.preventDefault()
        const newSalesperson = {
            first_name: currentSalesperson.first_name,
            last_name: currentSalesperson.last_name,
            quota: currentSalesperson.quota,
            customers: []
        }
        fetch('http://localhost:9292/salespeople', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSalesperson),
        })
            .then((resp) => resp.json())
            .then((salesperson) => {
                setSalespeople([
                ...salespeople,
                salesperson
            ])
            })
            setCurrentSalesperson({...defaultForm})
    }

    function handleInputChange(e) {
        setCurrentSalesperson({
            ...currentSalesperson,
            [e.target.name]: e.target.value
        })
    }

    const salespeopleOptions = salespeople.map((salesperson) => {
        return <option key={salesperson.id}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</option>
    })

    const salespeopleDropdownItems = salespeople.map((salesperson) => {
        return <Dropdown.Item onClick={() => getCustomersForSalesperson(salesperson.id)} key= {salesperson.id} as="button" value={`${salesperson.id} - ${salesperson.first_name} ${salesperson.last_name}`}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</Dropdown.Item>
    })


    return <SalesContext.Provider value={{ currentSalesperson, salespeopleDropdownItems, salespeople, salespeopleOptions, handleInputChange, getCustomersForSalesperson, createSalesperson, quota_total, selectedSalesperson, setSelectedSalesperson, setCurrentSalesperson, salespersonId, setSalespersonId, setCurrentCustomers, currentCustomers, defaultForm, setSalespeople, getCustomers }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }