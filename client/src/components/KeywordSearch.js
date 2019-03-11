import React from 'react';
 
const KeywordSearch = (props) => (
    <div>
        <div>
            <input 
            onChange={props.searchChangeHandler}
            value={props.value}/>
            <button onClick={props.searchClickHandler}>keyword search             
            </button>
        </div>
    </div>
)

export default KeywordSearch;