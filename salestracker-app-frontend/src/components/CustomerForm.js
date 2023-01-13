import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function CustomerForm() {
    const [revenue, setRevenue] = useState(0)
    const [salespeople, setSalespeople] = useState([])
    const [unitsSold, setUnitsSold] = useState(0)

    useEffect(() => {
        fetch('http://localhost:9292/salespeople')
            .then((resp) => resp.json())
            .then((salespeople) => setSalespeople(salespeople))
    }, [])

    const salespeopleOptions = salespeople.map((salesperson) => {
        return <option>{salesperson.first_name} {salesperson.last_name}</option>
    })

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Salesperson</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    {salespeopleOptions}
                </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Label>Customer First & Last Name</Form.Label>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Control placeholder="Last Name" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control
                    placeholder="Units Sold"
                    type="Number"
                    value={unitsSold}
                    name="units_sold"
                    onChange={(e) => setUnitsSold(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Control
                    placeholder="Revenue"
                    type="Number"
                    value={revenue}
                    name="revenue"
                    onChange={(e) => setRevenue(e.target.value)}
                    />
                </Form.Group>
                
        </Row>

            <Button variant= "primary" type="submit" className="mb-2">
                    Submit Customer
            </Button>
        </Form>
  );
}

export default CustomerForm;