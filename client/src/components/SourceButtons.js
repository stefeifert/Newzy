import React from 'react';
import '../App.css';



  const SourceButtons = (props) => (
    <div id="sourceDiv">
        {props.btnRow}
        <input 
        id="inputSource"
        onChange={props.sourcesChangeHandler}
        value={props.value}></input>
        <button 
        className="btn btn-secondary" id="sourceBtn" onClick={props.sourcesClickHandler}>Add News Source             
        </button>
    </div>
  )



export default SourceButtons;