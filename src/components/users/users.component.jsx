import React, { useEffect, useReducer, useState } from "react";
import useFetch from "../effects/useFetch.effect";
import { setUsers } from "../react-state-management/actions";
import reducer from "../react-state-management/reducer";

const INITIAL_STATE = {
  users: [],
  posts: [],
};

const UserComponent = () => {
  //   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const users = useFetch("users");
  //   const data = useFetch("users");
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //       let result = await response.json();
  //       dispatch(setUsers(result));
  //     };
  //     fetchData();
  //   });
  return (
    <div className="user-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data</td>
              <td>No Data</td>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;
