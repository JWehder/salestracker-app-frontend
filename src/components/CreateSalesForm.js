import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { SalesContext } from "../context/salesContext";
import Button from "react-bootstrap/Button";

function CreateSalesForm() {
    const { currentSalesperson, handleInputChange, createSalesperson } = useContext(SalesContext)

    return (
            <Form onSubmit={createSalesperson}>
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

                    <Form.Label>Quota</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control
                        placeholder="Quota"
                        type="number"
                        value={currentSalesperson.quota}
                        name="quota"
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Button variant= "primary" type="submit" className="mb-2">
                    Submit Salesperson
                </Button>
            </Form>
    )
}

export default CreateSalesForm;