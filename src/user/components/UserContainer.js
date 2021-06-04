// external dependencies
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

import UserList from './UserList';
import AddUser from './AddUser';
import * as userAction from '../user.actions';
import * as userReducers from '../user.reducers';

/**
 * Component that renders routes for user module.
 */
export default function UserContainer() {
    const [showAddUser, setShowAddUser] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(userReducers.selectAllUser);


    // Effect to fetch recruiter information.
    useEffect(() => {
        dispatch(userAction.fetchUserList());
    }, [dispatch]);

    return (
        <Container fluid>
            <Row>
                <Col>
                    {showAddUser ?
                        <AddUser onCancel={() => setShowAddUser(false)} /> :
                        <UserList
                            users={users}
                            onAddUserClick={() => setShowAddUser(true)} />}
                </Col>
            </Row>
        </Container>
    );
}
