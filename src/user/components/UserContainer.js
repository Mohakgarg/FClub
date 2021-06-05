// external dependencies
import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

import UserList from './UserList';
import * as userAction from '../user.actions';
import * as userReducers from '../user.reducers';
import history from '../../common/utils/history';

/**
 * Component that renders routes for user module.
 */
export default function UserContainer() {
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
                    <UserList
                        users={users}
                        onAddUserClick={() => history.push('add')} />
                </Col>
            </Row>
        </Container>
    );
}
