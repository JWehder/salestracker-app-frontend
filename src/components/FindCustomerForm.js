import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";

function FindCustomerForm() {
    const { getCustomer, customer } = useContext(CustomerContext)
    const { salespeopleOptions, getSalespersonForCustomer, salespersonId, setSalespersonId } = useContext(SalesContext)

    return(
        <div>
            <Form onSubmit={getCustomer}>
                <Form.Label>Search for a customer below</Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Salesperson</Form.Label>
                        <Form.Select 
                        name="salesperson_id"
                        defaultValue={`${customer.salesperson.id} - ${customer.salesperson.first_name} ${customer.salaesperson.last_name}`}
                        value={`${customer.salesperson.id} - ${customer.salesperson.first_name} ${customer.salesperson.last_name}`}
                        onChange={(e) => getSalespersonForCustomer(parseInt(e.target.value))}
                        >
                    
                            <option>Choose...</option>
                            {salespeopleOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Please Enter Customer # below:</Form.Label>
                        <Form.Control name={'id'} value= {salespersonId} onChange= {(e) => setSalespersonId(e.target.value)} placeholder="salesperson " />
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