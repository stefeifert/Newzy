import React from 'react';

const Result = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.source_name}</p>
        <p>{props.author}</p>
        <p><a href={props.url}>{props.url} </a></p>
        <button onClick={props.articleSaver} title={props.title} author={props.author} publication={props.source.name} url={props.url} pic={props.urlToImage}>Save to My Articles</button>
        <hr></hr>
    </div>
)

export default Result;