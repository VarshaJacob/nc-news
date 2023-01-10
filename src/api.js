import axios from 'axios';

const ncnewsApi = axios.create ({
    baseURL: 'https://nc-news-5nxp.onrender.com/api'
})

export const getTopics = () => {
    return ncnewsApi.get('/topics').then(res => {
        return res.data
    })
};

export const getArticles = () => {
    return ncnewsApi.get('/articles').then(res => {
        return res.data
    })
};

export const getArticleById = (article_id) => {
    return ncnewsApi.get(`/articles/${article_id}`).then(res => {
        return res.data
    })
}