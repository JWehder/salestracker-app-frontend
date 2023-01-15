import React, { createContext, useState, useEffect, useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CustomerContext } from './customerContext';

const SalesContext = createContext();

function SalesProvider( { children }) {
    const { setCustomers } = useContext(CustomerContext)

    const [salespeople, setSalespeople] = useState([])
    const [currentSalesperson, setCurrentSalesperson] = useState()

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    function getSalesperson(id) {
        fetch(`http://localhost:9292/salespeople/${id}`)
            .then((resp) => resp.json())
            .then((salesperson) => setData(salesperson))
    }

    function setData(salesperson) {
        setCustomers(salesperson.customers)
        setCurrentSalesperson(salesperson)
    }

    const salespeopleOptions = salespeople.map((salesperson) => {
        return <option key={salesperson.first_name}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</option>
    })

    const salespeopleDropdownItems = salespeople.map((salesperson) => {
        return <Dropdown.Item onClick={() => getSalesperson(salesperson.id)} key= {salesperson.first_name} as="button" value={`${salesperson.id} - ${salesperson.first_name} ${salesperson.last_name}`}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</Dropdown.Item>
    })


    return <SalesContext.Provider value={{ salespeopleDropdownItems, salespeople, salespeopleOptions }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }