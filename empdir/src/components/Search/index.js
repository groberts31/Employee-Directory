import React from "react";
import "./style.css";

function Search(props) {
  return (
      <div className="searchBlock md-form mt-0">
        <input placeholder="Select an Option!" className="inputBox blockItem form-control" type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <h3 className="blockItem">Find By:</h3>
        <div className="dropdown blockItem">
            <button className="btn btn-secondary" type="button" onClick={props.sortName}>
            Sort By Name
            </button>
        </div>
      </div>
  );
}

export default Search;