import React from "react";
import "../App.css";

const KeywordSearch = props => (
  <form id="keywordDiv">
    <input
      id="inputKeyword"
      onChange={props.searchChangeHandler}
      value={props.value}
    />
    <button className="btn btn-secondary" id="keywordBtn" onClick={props.searchClickHandler}>
      keyword search
    </button>
  </form>
);

export default KeywordSearch;
