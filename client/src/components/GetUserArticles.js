import axios from 'axios';
import RenderArticles from './RenderArticles';


const GetUserArticles = () => {
    const userId = localStorage.getItem("jwtToken");
        console.log(userId);
        axios
            .get(`/api/user/${userId}`)
            .then(function (data) {
                RenderArticles(data.article[0])
            })
}

export default GetUserArticles;