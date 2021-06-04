// external dependencies
import React from 'react';
import { ListGroup, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

/**
 * Component that renders routes for user module.
 */
export default function UserListItem(props) {
    return <ListGroup.Item>
        <div className="d-flex justify-content-between" onClick={props.onUserClick}>
            {props.user.name}
            <Button variant="danger" onClick={() => props.onUserDeleteClick(props.user)}>Delete</Button>
        </div>
    </ListGroup.Item>;
}

UserListItem.propTypes = {
    user: PropTypes.object.isRequired,
    onUserClick: PropTypes.func.isRequired,
    onUserDeleteClick: PropTypes.func.isRequired,
};

UserListItem.defaultProps = {
    user: {},
    onUserClick: () => ({}),
    onUserDeleteClick: () => ({})
};
