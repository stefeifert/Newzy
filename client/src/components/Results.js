import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div className="resultsDiv">
              {this.props.searchResults.map(d => (
                <div className="card" key={d.url.substr(9)}>
                  <div 
                    className="card-img-top"
                    style={{minHeight: "10vh"}}
                  >
                    <p>{d.description}</p>
                    <img src={d.urlToImage} alt=''/>
                  </div>
                  <div className="card-body">
                    <p className="card-title">{d.title}</p>
                    <p className="card-source">{d.source.name}</p>
                    <p className="card-date">
                      {d.publishedAt.toString().substr(5, 5)}-
                      {d.publishedAt.toString().substr(0, 4)}
                    </p>
                    <button className="btn btn-secondary cardBtn">
                      <a href={d.url} target="blank">go to story</a>
                    </button>
                    <button
                      className="btn saveBtn cardBtn"
                      target="blank"
                      onClick={this.articleSaver}
                      title={d.title}
                      description={d.description}
                      author={d.author}
                      publication={d.source.name}
                      url={d.url}
                      pic={d.urlToImage}
                      identifier={d.title.replace(/\W/g,'')}//removes all non-alphanumeric characters
                    >
                      Save to My Articles
                    </button>
                  </div>
                </div>
              ))}
            </div>
        );
    };
};

export default Results;