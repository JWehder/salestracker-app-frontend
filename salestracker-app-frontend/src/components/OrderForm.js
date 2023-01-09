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
                <Col xs="auto">
                <Form.Label>Salesperson First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
                </Col>
                <Col xs="auto">
                <Form.Label>Salesperson Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs="auto">
                <Form.Label>Product</Form.Label>
                <FloatingLabel controlId="floatingSelectGrid" label="Select a nut">
                <Form.Select>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </FloatingLabel>
                </Col>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" type="number" visuallyHidden>
                    Quantity
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                />
                </Col>
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
                </Col>
            </Row>

        
        </Form>
  );
}

export default OrderForm;