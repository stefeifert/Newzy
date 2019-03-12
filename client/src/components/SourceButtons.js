import React from 'react';

  const SourceButtons = (props) => (
    <div>
      <div>
        <span>
        <input 
        className="input"
        onChange={props.sourcesChangeHandler}
        value={props.value}></input>
        <button className="btn btn=primary"onClick={props.sourcesClickHandler}>Add News Source             
        </button>{props.btnRow}</span>
      </div>
    </div>
  )



export default SourceButtons;