// external dependencies
import React from 'react';
import { Card, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

/**
 * Component that renders routes for user module.
 */
export default function AddUser(props) {
    return (
        <Card className="mt-5">
            <Card.Header>
                <div className="d-flex justify-content-between"><h3>Add User</h3>
                    <Button variant="primary" onClick={props.onCancel}>Close</Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

AddUser.propTypes = {
    onCancel: PropTypes.func.isRequired,
};

AddUser.defaultProps = {
    onCancel: () => ({})
};