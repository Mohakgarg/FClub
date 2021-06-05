// external dependencies
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';

import * as userAction from '../user.actions';
import history from '../../common/utils/history';

/**
 * Component that renders routes for user module.
 */
export default function AddUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(userAction.addUser({
            name,
            age
        }));
    }

    function handleNameChange(e) {
        console.log("name", e.target.value);
        setName(e.target.value);

    }

    function handleAgeChange(e) {
        console.log("age", e.target.value);
        setAge(e.target.value);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className="mt-5">
                        <Card.Header>
                            <div className="d-flex justify-content-between"><h3>Add User</h3>
                                <Button variant="primary" onClick={() => history.push('/')}>Close</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={handleNameChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Age" onChange={handleAgeChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                    </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

