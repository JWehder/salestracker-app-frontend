import React, { createContext, useState, useEffect } from 'react';

const SalesContext = createContext();

function SalesProvider( { children }) {
    const [salespeople, setSalespeople] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    return <SalesContext.Provider value={{ salespeople }}>{children}</SalesContext.Provider>
}

export { SalesProvider, SalesContext }