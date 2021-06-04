// external dependencies
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import UserList from './UserList';
import AddUser from './AddUser';

/**
 * Component that renders routes for user module.
 */
export default function UserContainer() {
    const [showAddUser, setShowAddUser] = useState(false);

    return (
        <Container fluid>
            <Row>
                <Col>
                    {showAddUser ?
                        <AddUser onCancel={() => setShowAddUser(false)} /> :
                        <UserList
                            users={
                                [
                                    { id: 1, name: "Avinash" },
                                    { id: 2, name: "Mohok" }
                                ]
                            }
                            onAddUserClick={() => setShowAddUser(true)} />}
                </Col>
            </Row>
        </Container>
    );
}
