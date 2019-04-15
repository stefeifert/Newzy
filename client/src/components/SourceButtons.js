import React from 'react';
import AutoInput from './AutoInput';

  const SourceButtons = (props) => (
    <div>
      <form id="sourceDiv">
          {props.btnRow}
          <AutoInput
            sourcesChangeHandler={props.sourcesChangeHandler}
            value={props.value}/>
          <button 
          className="btn btn-secondary" id="sourceBtn" onClick={props.sourcesClickHandler}>Add News Source             
          </button>
      </form>
      </div>
  )




export default SourceButtons;