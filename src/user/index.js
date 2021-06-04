// external dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Component that renders routes for user module.
 */
export default function UserModule() {
  //  const dispatch = useDispatch();
  // Selector for determine recruiter list fetching state.
  const state = useSelector(
    (state) => state
  );

  return <div> User module </div>;
}
