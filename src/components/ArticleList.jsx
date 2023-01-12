import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { getArticles } from "../api";
import TopicList from "./TopicList";


const ArticleList = () => {

    const [articleList, setArticleList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const {topic} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticles().then(res => {
            setArticleList(res.articles)
            setIsLoading(false)
        })
    },[])


    if (isLoading) {
        return <p className="Loading">Articles are Loading ...</p>
    }

    return (
        <div>
            <TopicList />
            <ol className="ArticleList">
                {articleList.map(article => {
                    if (topic === undefined) {
                        return (
                            <Link to={`/articles/${article.article_id}`} style={{textDecoration:'none'}}>
                            <li className="ArticleCard" key={article.article_id}>
                            <h3>{article.title}</h3>
                            <p>Author: {article.author}</p>
                            <p>Topic: {article.topic}</p>
                            </li>
                            </Link> 
                        )
                    } else if(article.topic === topic) {
                        return (
                            <Link to={`/articles/${article.article_id}`} style={{textDecoration:'none'}}>
                            <li className="ArticleCard" key={article.article_id}>
                            <h3>{article.title}</h3>
                            <p>Author: {article.author}</p>
                            <p>Topic: {article.topic}</p>
                            </li>
                            </Link> 
                        )
                    }
                    
                })}
            </ol>
        </div>
    )
};

export default ArticleList;