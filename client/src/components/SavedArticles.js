import React, { Component } from "react";
import GetUserArticles from './GetUserArticles';
import { Link } from "react-router-dom";
import $ from 'axios';
import RenderArticles from './RenderArticles';




class SavedArticles extends Component {
    state = {

    }

    componentDidMount() {
        const userId = localStorage.getItem("jwtToken");
        $.get(`/api/user/${userId}`)
            .then(function (data) {
                RenderArticles(data.article[0])
            })
    }




    render() {
        return (
            <div>
                <Link to="/HomePage" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                </Link>
                <div className="myArticles">
                </div>
            </div>
        );
    }
}

export default SavedArticles;