import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";

function InfoCard() {
    const [totals, setTotals] = useState({
        total_quota: 0,
        total_rev: 0,
    })

    const { customers } = useContext(CustomerContext)
    const { salespeople } = useContext(SalesContext)

    const reducer = (accumulator, metric) => {
        
    }

    return (
        <>
            <Card
            bg={'Light'.toLowerCase()}
            key={'Light'}
            text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
            >
            <Card.Header>Data Name</Card.Header>
            <Card.Body>
                <Card.Title>{'Light'} Data Name </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}

export default InfoCard;