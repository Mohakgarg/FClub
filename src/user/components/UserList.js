// external dependencies
import React, { useEffect, Fragment } from 'react';
import { ListGroup } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Jumbotron, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';

// internal dependencies
import * as userAction from '../user.actions';
import UserListItem from './UserListItem';
import history from '../../common/utils/history';

/**
 * Component that renders routes for user module.
 */
export default function UserList(props) {
    const dispatch = useDispatch();

    function handleUserDelete(user) {
        dispatch(userAction.deleteUser(user._id));
    }

    function handleUserClick(user) {
        history.push(`/edit/${user._id}`);
    }

    return (
        <Fragment>
            <Jumbotron>
                <div className="d-flex justify-content-between"><h3>User List</h3>
                    <Button variant="primary" onClick={props.onAddUserClick}>Add User</Button>
                </div>
            </Jumbotron>
            <ListGroup>
                {props.users.map((user, idx) => <UserListItem key={idx} user={user} onUserDeleteClick={handleUserDelete} onUserClick={handleUserClick} />)}
            </ListGroup>
        </Fragment>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    onAddUserClick: PropTypes.func.isRequired,
};

UserList.defaultProps = {
    users: [],
    onAddUserClick: () => ({})
};
