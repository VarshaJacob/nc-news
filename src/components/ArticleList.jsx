import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getArticles } from "../api";
import TopicList from "./TopicList";


const ArticleList = () => {

    const [articleList, setArticleList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const {topic} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic).then(res => {
            setArticleList(res.articles)
            setIsLoading(false)
        })
    },[topic])

    if (isLoading) {
        return <p className="Loading">Articles are Loading ...</p>
    }

    return (
        <div>
            <TopicList />
            <ol className="ArticleList">
                {articleList.map(article => {
                    return (
                        <Link to={`/articles/${article.article_id}`} style={{textDecoration:'none'}}>
                        <li className="ArticleCard" key={article.article_id}>
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