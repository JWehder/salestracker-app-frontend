import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";

function OrderForm() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Label>Salesperson First & Last Name</Form.Label>
                <Form.Group as={Col}>
                <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group as= {Col}>
                <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Product</Form.Label>
                <FloatingLabel controlId="floatingSelectGrid" label="Select a nut">
                <Form.Select>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}>
                <Form.Label htmlFor="inlineFormInput">
                    Quantity
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    type="number"
                />
                </Form.Group>
                <Form.Group as= {Col}>
                <Button className= "addButton" variant="primary">Add +</Button>
                </Form.Group>
            </Row>
            <Button variant= "success" type="submit" className="mb-2">
                    Submit Order
            </Button>
        </Form>
  );
}

export default OrderForm;