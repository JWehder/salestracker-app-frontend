import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function OrderForm() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                <Form.Label>Salesperson First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group as= {Col}>
                <Form.Label>Salesperson Last Name</Form.Label>
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
                <Form.Label htmlFor="inlineFormInput" type="number">
                    Quantity
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                />
                </Form.Group>
                <Form.Group as={Col}>
                <Button variant="primary">Cancel Order -</Button>
                </Form.Group>
            </Row>
            <Button type="submit" className="mb-2">
                    Submit Order
            </Button>
        </Form>
  );
}

export default OrderForm;