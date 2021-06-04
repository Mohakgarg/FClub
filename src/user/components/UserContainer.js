// external dependencies
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import UserList from './UserList';
import AddUser from './AddUser';

/**
 * Component that renders routes for user module.
 */
export default function UserContainer() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    {/* <UserList users={[{ id: 1, name: "Avinash" }, { id: 2, name: "Mohok" }]} /> */}
                    <AddUser />
                </Col>
            </Row>
        </Container>
    );
}
