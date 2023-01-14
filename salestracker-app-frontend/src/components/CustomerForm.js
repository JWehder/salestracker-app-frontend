import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { SalesContext } from "../context/salesContext";
import { CustomerContext } from "../context/customerContext";

function CustomerForm() {
    const { salespeopleOptions } = useContext(SalesContext)
    const { customer, handleInputChange } = useContext(CustomerContext)

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
                    value={customer.units_sold}
                    name="units_sold"
                    onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Control
                    placeholder="Revenue"
                    type="Number"
                    value={customer.revenue}
                    name="revenue"
                    onChange={handleInputChange}
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