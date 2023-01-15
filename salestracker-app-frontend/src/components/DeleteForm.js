import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CustomerContext } from "../context/customerContext";

function DeleteForm() {
    const { handleInputChange, customer } = useContext(CustomerContext)

    return (
        <div>
            <div>
                <Form onSubmit={deleteCustomer}>
                    <Form.Label>Please enter Customer Number#</Form.Label>
                        <Form.Group className="mb-3">
                        <Form.Control name={'id'} value= {customer.id} onChange= {handleInputChange} placeholder="1234" />
                    </Form.Group>
                    <Button variant= "primary" type="submit" className="mb-2">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default DeleteForm;
