import React from 'react';
 
const KeywordSearch = props => (
    <div>
        <span><input 
        onChange={props.searchChangeHandler}
        value={props.value}/>
        <button onClick={props.searchClickHandler}>keyword search             
        </button>
        </span>
        {props.searchResults}
    </div>
)

export default KeywordSearch;