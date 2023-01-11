import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function OrderForm() {
    const [quantity, setQuantity] = useState(0)
    const [select, setSelect] = useState("...")

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Salesperson</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
            </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Select 
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                    >
                    <option>Choose...</option>
                    <option>...</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control
                    placeholder="Quantity"
                    type="Number"
                    value={quantity}
                    name="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                </Form.Group>
                
        </Row>

            <Button variant= "success" type="submit" className="mb-2">
                    Submit Order
            </Button>
        </Form>
  );
}

export default OrderForm;