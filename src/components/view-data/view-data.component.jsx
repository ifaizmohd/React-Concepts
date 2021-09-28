import React, { useEffect } from "react";
import "./view-data.styles.css";

const ViewData = ({ data }) => {
  useEffect(() => {
    console.log("rendered!");
  }, []);
  return (
    <div className="view-data-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phoneNumber}</td>
              </tr>
            ))
          ) : (
            <div>No Data Found!</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;
