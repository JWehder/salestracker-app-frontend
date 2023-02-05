import React, { useContext, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";

function FindCustomerForm() {
    const { customer } = useContext(CustomerContext)
    const { salespeopleOptions, getSalespersonForCustomer } = useContext(SalesContext)

    const [salespersonDisplayed, setSalespersonDisplayed] = useState({
        salespersonId: 0,
        salespersonFirstName: "",
        salespersonLastName: ""
    })
    const [customerNumber, setCustomerNumber] = useState(0)

    // handle the select event 

    function handleSelect(id) {
        salespeople
    }

    return(
        <div>
            <Form onSubmit={() => getSalespersonForCustomer(customerNumber, salespersonDisplayed)}>
                <Form.Label>Search for a customer below</Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Salesperson</Form.Label>
                        <Form.Select 
                        name="salesperson_id"
                        value={`${customer.salesperson_id} - ${customer.salesperson_first_name} ${customer.salesperson_last_name}`}
                        onChange={(e) => setSalespersonId(parseInt(e.target.value))}
                        >
                            <option>Choose...</option>
                            {salespeopleOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Please Enter Customer # below:</Form.Label>
                        <Form.Control name={'id'} value= {customerNumber} onChange= {(e) => setCustomerNumber(e.target.value)} placeholder="salesperson " />
                    </Form.Group>
                </Row>
                <Button variant= "primary" type="submit" className="mb-2">
                    Submit
                </Button>
            </Form>
    </div>
    )

}

export default FindCustomerForm;