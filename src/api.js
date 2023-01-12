import axios from 'axios';

const ncnewsApi = axios.create ({
    baseURL: 'https://nc-news-5nxp.onrender.com/api'
})

export const getTopics = () => {
    return ncnewsApi.get('/topics').then(res => {
        return res.data
    })
};

export const getArticles = (topic) => {
    let url='/articles'

    if (topic) {
        url += `?topic=${topic}`
    }

    return ncnewsApi.get(url).then(res => {
        return res.data
    })
};

export const getArticleById = (article_id) => {
    return ncnewsApi.get(`/articles/${article_id}`).then(res => {
        return res.data
    })
}

export const getCommentsByArticle = (article_id) => {
    return ncnewsApi.get(`/articles/${article_id}/comments`).then(res => {
        return res.data
    })
}

export const patchArticleVote = (article_id,changeVote) => {
    const patchBody = {inc_votes: changeVote}
    return ncnewsApi.patch(`/articles/${article_id}`,patchBody).then(res => {
        return res.data
    })
}