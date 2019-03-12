import React from 'react';

const Result = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.source_name}</p>
        <p>{props.author}</p>
        <p><a href={props.url}>{props.url} </a></p>
        <hr></hr>
    </div>
)

export default Result;