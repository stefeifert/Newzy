import React from 'react';


  const SourceButtons = (props) => (
    <form id="sourceDiv">
        {props.btnRow}
        <input 
        list={props.verifiedSources}
        id="inputSource"
        onChange={props.sourcesChangeHandler}
        value={props.value}></input>
        <button 
        className="btn btn-secondary" id="sourceBtn" onClick={props.sourcesClickHandler}>Add News Source             
        </button>
    </form>
  )



export default SourceButtons;