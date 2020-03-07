import React from "react";
import "./style.css";

function Search(props) {
  return (
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" type="button" onClick={props.sortName}>Filter</button>
  </div>
  <input type="text" className="form-control" placeholder="Case Sensitive!!!" value={props.search} onChange={props.handleInputChange} name="search" id="search"/>
</div>
  );
}

export default Search;
