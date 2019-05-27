import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import SourceButtons from "./SourceButtons";
import KeywordSearch from "./KeywordSearch";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./Footer";
import CategoryCountry from "./CategoryCountry";
import ScrollToTop from "./ScrollToTop";

class HomePage extends Component {
  state = {
    sources: [
      {
        id: "cnn",
        name: "CNN"
      },
      {
        id: "bbc-news",
        name: "BBC News"
      },
      {
        id: "msnbc",
        name: "MSNBC"
      },
      {
        id: "fox-news",
        name: "FOX News"
      }
    ], //this array wil be used to compile buttons
    newSource: { id: "", name: "" },
    sourceIds: [],
    isValidSource: false,
    keywordSearch: "",
    searchResults: [],
    singleSource: "",
    newArticle: {
    },
    category: "",
    country: ""
  };

  searchResults = event => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q="${
          this.state.keywordSearch
        }"&pageSize=30&apiKey=4a91afd2bdda4b18be76a2f996628566`
      )
      .then(result => {
        this.setState({ searchResults: result.data.articles });
      });
  };

  categoryCountrySearch = event => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?pageSize=30${this.state.country}${this.state.category}&apiKey=4a91afd2bdda4b18be76a2f996628566`
      )
      .then(result => {
        this.setState({ searchResults: result.data.articles});
    });
  }

  searchChangeHandler = event => {
    event.preventDefault();
    const keywordSearch = event.target.value.replace(/ /g,"+");
    this.setState({ keywordSearch: keywordSearch });
  };
  searchClickHandler = event => {
    event.preventDefault();
    this.searchResults();
    document.getElementById('inputKeyword').value = '';

  };

  categoryChangeHandler = event => {
    event.preventDefault();
    const categoryInput = event.target.value;
    this.setState({ category: `&category=${categoryInput}`})
  };  
  countryChangeHandler = event => {
    event.preventDefault();
    const countryInput = event.target.value;
    this.setState({ country: `&country=${countryInput}`})
    if (this.state.category===''){
      this.setState({ category: '&category=general'})
    };
  };
  categoryCountryClickHandler = event => {
    event.preventDefault();
    this.categoryCountrySearch();
  }

  sourcesChangeHandler = event => {
    event.preventDefault();
    const inputSource = {
      id: event.target.value.replace(/\s+/g, "-").toLowerCase(), //changes "Al Jazeera" to "al-jazeera"
      name: event.target.value
    };
    this.setState({ newSource: inputSource });
  };

  sourcesClickHandler = event => {
    event.preventDefault();
    this.setState({ sources: [...this.state.sources, this.state.newSource] });
    this.setState({ newSource: "" });
    document.getElementById('inputSource').value='';
  };

  singleSourceClick = event => {
    const whichSource = event.target.value;
    this.setState({ singleSource: whichSource }, this.createSourceNews);
  };

  createSourceNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${
          this.state.singleSource
        }&pageSize=30&apiKey=4a91afd2bdda4b18be76a2f996628566`
      )
      .then(result => {
        this.setState({ searchResults: result.data.articles });
      });
  };

  articleSaver = event => {
    const clickedArticle = {
      article_name: event.target.title,
      article_description: event.target.getAttribute("description"),
      author_name: event.target.getAttribute("author"),
      publication_source: event.target.getAttribute("publication"),
      article_url: event.target.getAttribute("url"),
      photo_url: event.target.getAttribute("pic"),
      identifier: event.target.getAttribute("identifier")
    };
    event.target.innerHTML = "Article Saved";
    event.target.setAttribute("disabled", "disabled");
    this.setState({ newArticle: clickedArticle }, this.createSave);
  };

  createSave = () => {
    axios.post(`api/article`, this.state.newArticle).then(res => {});
  };

  //SCROLLING functions

  scrollFunction = () => {
    document.getElementById("scrollBtn").style.display="block";
  }

  scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 componentDidMount() {
   if(window.pageYOffset === 0){
    document.getElementById('scrollBtn').style.display="none";
   };
    window.addEventListener('scroll', this.scrollFunction);
};

  render() {
    const currentSources = this.state.sources; //button array of news sources
    const sourcesBtn = currentSources.map(source => {
      return (
        <button
          className="btn"
          onClick={this.singleSourceClick}
          key={source.id}
          value={source.id}
        >
          {source.name.replace(/-/g, ' ')}
        </button>
      );
    });
    return (
      <div className="HomePage">
        <div id="content-wrap">
          <div>
            <Dashboard 
            ForHomePage = "inherit"
            ForSavedArticles = "none"
            />
          </div>
          <div className="mt-5">
            <p className="words" id="sourceWords">
              see headlines from your favorite news sources
            </p>
            <p id="sourceBtns">{sourcesBtn}</p>
            <SourceButtons
              sourcesChangeHandler={this.sourcesChangeHandler}
              sourcesClickHandler={this.sourcesClickHandler}
            />
            <p className="words" id="keywordWords">
              or search by keyword
            </p>
            <KeywordSearch
              searchChangeHandler={this.searchChangeHandler}
              searchClickHandler={this.searchClickHandler}
              searchResults={this.state.searchResults}
            />
            <CategoryCountry
              categoryChangeHandler={this.categoryChangeHandler}
              countryChangeHandler={this.countryChangeHandler}
              clickHandler={this.categoryCountryClickHandler}/>
            <div className="resultsDiv">
              {this.state.searchResults.map(d => (
                <div className="card" key={d.url.substr(9)}>
                  <div 
                    className="card-img-top"
                    style={{minHeight: "150px"}}
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
          </div>
        </div>
        <ScrollToTop
          scrollUp={this.scrollUp}/>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
