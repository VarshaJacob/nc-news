import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getArticles } from "../api";


const ArticleList = () => {

    const [articleList, setArticleList] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles().then(res => {
            setArticleList(res.articles)
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <p>Articles are Loading ...</p>
    }

    return (
        <div className="ArticleList">
            <ol>
                {articleList.map(article => {
                    return (
                        <Link to={`/articles/${article.article_id}`} style={{textDecoration:'none'}}>
                        <li className="ArticleCard">
                        <h3>{article.title}</h3>
                        <p>Author: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        </li>
                        </Link>
                       
                    )
                })}
            </ol>
        </div>
    )
};

export default ArticleList;