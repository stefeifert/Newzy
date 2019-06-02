import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import NewsSources from "./NewsSources";
import KeywordSearch from "./KeywordSearch";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./Footer";
import CategoryCountry from "./CategoryCountry";
import Results from "./Results";
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
    newArticle: {},
    category: "",
    country: ""
  };

  searchResults = () => {
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

  categoryCountrySearch = () => {
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

  render() {
    return (
      <div id="content-wrap">
        <div>
          <Dashboard 
          ForHomePage = "inherit"
          ForSavedArticles = "none"
          />
        </div>
        <div className="mt-5">
          <NewsSources 
            sources={this.state.sources}
            singleSourceClick={this.singleSourceClick}
            sourcesChangeHandler={this.sourcesChangeHandler}
            sourcesClickHandler={this.sourcesClickHandler}
          />
          <KeywordSearch
            searchChangeHandler={this.searchChangeHandler}
            searchClickHandler={this.searchClickHandler}
            searchResults={this.state.searchResults}
          />
          <CategoryCountry
            categoryChangeHandler={this.categoryChangeHandler}
            countryChangeHandler={this.countryChangeHandler}
            clickHandler={this.categoryCountryClickHandler}/>
          <Results
            searchResults={this.state.searchResults}
            articleSaver={this.articleSaver}
          />
        </div>
        <ScrollToTop scrollUp={this.scrollUp}/>
        <Footer
          ForHomePage = "none"
          ForSavedArticles = "inherit"
        />
      </div>
    );
  }
}

export default HomePage;
