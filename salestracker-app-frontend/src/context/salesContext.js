import React, { createContext, useState, useEffect } from 'react';

const SalesContext = createContext();

function SalesProvider( { children }) {
    const [salespeople, setSalespeople] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    const salespeopleOptions = salespeople.map((salesperson) => {
        return <option>{salesperson.id} - {salesperson.first_name} {salesperson.last_name}</option>
    })

    return <SalesContext.Provider value={{ salespeople, salespeopleOptions }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }