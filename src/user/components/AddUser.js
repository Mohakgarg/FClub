// external dependencies
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import * as userAction from '../user.actions';
import history from '../../common/utils/history';
import * as userReducers from '../user.reducers';

/**
 * Component that renders routes for user module.
 */
export default function AddUser() {
    const { id } = useParams()
    const user = useSelector((state) => userReducers.getUserById(state, id)) || {};
    const [name, setName] = useState(user.name || '');
    const [age, setAge] = useState(user.age || 0);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        if (id) {
            dispatch(userAction.editUser({
                id,
                name,
                age
            }));
        } else {
            dispatch(userAction.addUser({
                name,
                age
            }));
        }
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
                            <div className="d-flex justify-content-between"><h3>{id ? "Edit User" : "Add User"}</h3>
                                <Button variant="primary" onClick={() => history.push('/')}>Close</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={handleNameChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Age" value={age} onChange={handleAgeChange} />
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

