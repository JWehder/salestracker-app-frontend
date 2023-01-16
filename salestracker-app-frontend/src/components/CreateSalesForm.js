import React, { useContext } from "react";
import { Form } from "react-bootstrap/lib/Navbar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { SalesContext } from "../context/salesContext";

function CreateSalesForm() {
    const { currentSalesperson, handleInputChange } = useContext(SalesContext)

    return (
            <Row className="mb-3">
                <Form.Label>Salesperson First & Last Name</Form.Label>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Control 
                placeholder="First Name" 
                type="text"
                value={currentSalesperson.first_name}
                name="first_name"
                onChange={handleInputChange}
                />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                <Form.Control 
                placeholder="Last Name" 
                type="text"
                value={currentSalesperson.last_name}
                name="last_name"
                onChange={handleInputChange}
                />
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label>Quota</Form.Label>
                    <Form.Control
                    placeholder="Units Sold"
                    type="Number"
                    value={currentSalesperson.quota}
                    name="units_sold"
                    onChange={handleInputChange}
                    />
                </Form.Group>
        </Row>



    )
}

export default CreateSalesForm;