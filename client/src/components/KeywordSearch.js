import React from "react";

const KeywordSearch = props => (
  <div>
  <p className="words" id="keywordWords">
  or search by keyword
</p>
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
  </div>
);

export default KeywordSearch;
