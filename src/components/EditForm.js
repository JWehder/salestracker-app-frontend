import React, { useContext } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { CustomerContext } from "../context/customerContext";
import { SalesContext } from "../context/salesContext";
import FindCustomerForm from "./FindCustomerForm";

function EditForm() {
    const { salespeopleOptions } = useContext(SalesContext)
    const { displayForm, customer, handleInputChange, editCustomer, getSalespersonForCustomer } = useContext(CustomerContext)

    return (
        <div>
            <FindCustomerForm />
            {
                displayForm ?
            <Form onSubmit={editCustomer}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Salesperson</Form.Label>
                    <Form.Select 
                    name="salesperson_id"
                    defaultValue={`${customer.salesperson.id} - ${customer.salesperson.first_name} ${customer.salesperson.last_name}`}
                    value={`${customer.salesperson.id} - ${customer.salesperson.first_name} ${customer.salesperson.last_name}`}
                    onChange={(e) => getSalespersonForCustomer(parseInt(e.target.value))}
                    >
                        <option>Choose...</option>
                        {salespeopleOptions}
                    </Form.Select>
                    </Form.Group>
                </Row>
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
                </Row>
                <Row className="mb-3">
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

                    
                    <Form.Group as={Col}>
                    <Form.Label>Revenue</Form.Label>
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
                        Search
                </Button>
            </Form>
            :
            ""
            }
        </div>
    );
}

export default EditForm;