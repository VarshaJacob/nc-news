import { useEffect, useState } from "react";
import { getArticles } from "../api";

const ArticleList = () => {

    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        getArticles().then(res => {
            setArticleList(res.data.articles)
        })
    },[])

    console.log(articleList)

    return (
        <div className="ArticleList">
            <ol>
                {articleList.map(article => {
                    return (
                       <li className="Article">
                        <h3>{article.title}</h3>
                        <p>Author: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
};

export default ArticleList;