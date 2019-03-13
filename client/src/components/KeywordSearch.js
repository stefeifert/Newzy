import React from "react";
import "../App.css";

const KeywordSearch = props => (
  <div id="keywordDiv">
    <input
      id="inputKeyword"
      style={{ width: "15%", backgroundColor: "#ffffff", padding: "0 2px" }}
      onChange={props.searchChangeHandler}
      value={props.value}
    />
    <button className="btn btn-primary" id="keywordBtn" onClick={props.searchClickHandler}>
      keyword search
    </button>
  </div>
);

export default KeywordSearch;
