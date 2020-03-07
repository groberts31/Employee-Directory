import React from "react";
import "./style.css";

function EmployeeInfo(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Employee Name:</strong> {props.name}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Contact:</strong> {props.contact}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeInfo;