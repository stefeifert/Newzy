import React from 'react';
 
const KeywordSearch = (props) => (
    <div>
        <div>
            <input 
            onChange={props.searchChangeHandler}
            value={props.value}/>
            <button className="btn btn-primary" onClick={props.searchClickHandler}>keyword search             
            </button>
        </div>
    </div>
)

export default KeywordSearch;