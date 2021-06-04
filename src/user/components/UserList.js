// external dependencies
import React, { useEffect, Fragment } from 'react';
import { ListGroup } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Jumbotron, Button } from "react-bootstrap";

// internal dependencies
import UserListItem from './UserListItem';

/**
 * Component that renders routes for user module.
 */
export default function UserList(props) {
    function handleUserDelete(user) {

    }
    return (
        <Fragment>
            <Jumbotron>
                <div className="d-flex justify-content-between"><h3>User List</h3>
                    <Button variant="primary" onClick={props.onAddUserClick}>Add User</Button>
                </div>
            </Jumbotron>
            <ListGroup>
                {props.users.map((user, idx) => <UserListItem key={idx} user={user} onUserDeleteClick={handleUserDelete} />)}
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
