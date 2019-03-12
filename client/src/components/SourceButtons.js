import React from 'react';

  const SourceButtons = (props) => (
    <div>
      <div>
        <span>
        <input 
        onChange={props.sourcesChangeHandler}
        value={props.value}></input>
        <button onClick={props.sourcesClickHandler}>Add News Source             
        </button>{props.btnRow}</span>
      </div>
    </div>
  )



export default SourceButtons;