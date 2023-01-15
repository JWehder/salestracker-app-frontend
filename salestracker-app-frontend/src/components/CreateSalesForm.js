import React from "react";
import { Form } from "react-bootstrap/lib/Navbar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function CreateSalesForm() {
    return (
            <Row className="mb-3">
                <Form.Label>Customer First & Last Name</Form.Label>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Control 
                placeholder="First Name" 
                type="text"
                value={customer.customer_first_name}
                name="customer_first_name"
                onChange={handleInputChange}
                />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Control 
                placeholder="Last Name" 
                type="text"
                value={customer.customer_last_name}
                name="customer_last_name"
                onChange={handleInputChange}
                />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>Units Sold</Form.Label>
                    <Form.Control
                    placeholder="Units Sold"
                    type="Number"
                    value={customer.units_sold}
                    name="units_sold"
                    onChange={handleInputChange}
                    />
                </Form.Group>
        </Row>



    )
}

export default CreateSalesForm;