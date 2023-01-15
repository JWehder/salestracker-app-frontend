import React, { createContext, useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const SalesContext = createContext();

function SalesProvider( { children }) {
    const [salespeople, setSalespeople] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    const salespeopleOptions = salespeople.map((salesperson) => {
        return <option key={salesperson.first_name}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</option>
    })

    const salespeopleDropdownItems = salespeople.map((salesperson) => {
        return <Dropdown.Item onClick={() => } key= {salesperson.first_name} as="button" value={`${salesperson.id} - ${salesperson.first_name} ${salesperson.last_name}`}>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</Dropdown.Item>
    })


    return <SalesContext.Provider value={{ salespeopleDropdownItems, salespeople, salespeopleOptions }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }