import React, { createContext, useState, useEffect, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CustomerContext } from './customerContext';

const SalesContext = createContext();

function SalesProvider( { children }) {
    // delete customers and the get request
    // run a function that maps customers to an array for currentCustomers placed at the start
    const { customers } = useContext(CustomerContext)
    // setCurrentCustomers
    const [salespeople, setSalespeople] = useState([])
    const [currentSalesperson, setCurrentSalesperson] = useState({
        first_name: "",
        last_name: "",
        quota: 0,
        customers: []
    })
    const [selectedSalesperson, setSelectedSalesperson] = useState("All")
    const [currentCustomers, setCurrentCustomers] = useState([])

    const quota_total = salespeople.reduce((accumulator, salesperson) => {
        if (currentSalesperson.quota === 0) {
            return accumulator += salesperson.quota
        } else {
            return accumulator += currentSalesperson.quota
        }
    }, 0)

    function getSalesperson(value) {
        if (value === "All") {
            const allCustomers = salespeople.map((salesperson) => salesperson.customers)
            setCurrentCustomers(allCustomers)
        } else {
            const salesperson = salespeople.find((salesperson) => salesperson.id === parseInt(value))
            setCurrentCustomers(salesperson.customers)
        }
    }

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => {
                setSalespeople(salespeople)
                let allCustomers = []
                salespeople.forEach((salesperson) => {
                    if (salesperson.customers.length > 0) {
                        salesperson.customers.forEach((customer) => {
                            allCustomers = [...allCustomers, customer]
                        })
                    }
                })
                setCurrentCustomers(allCustomers)
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
            .then((salesperson) => setSalespeople([
                ...salespeople,
                salesperson
            ]))
        setCurrentSalesperson({
            first_name: "",
            last_name: "",
            quota: 0,
            customers: [] 
            })
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
        return <Dropdown.Item onClick={() => getSalesperson(salesperson.id)} key= {salesperson.first_name} as="button" value={`${salesperson.id} - ${salesperson.first_name} ${salesperson.last_name}`}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</Dropdown.Item>
    })


    return <SalesContext.Provider value={{ currentSalesperson, salespeopleDropdownItems, salespeople, salespeopleOptions, handleInputChange, getSalesperson, createSalesperson, quota_total, selectedSalesperson, setSelectedSalesperson, setCurrentSalesperson }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }