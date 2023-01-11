import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import TopicList from "./TopicList";
import { getArticles } from "../api";

const ArticleByTopic = () => {

    const {topic} = useParams()
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
        return <p className="Loading">Articles are Loading ...</p>
    }

    
    return (
        <div>
        <TopicList />
        <section className="ArticleList">
        {articleList.map(article => {
            if (article.topic === topic) {
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
        </section>
        </div>
    )
};

export default ArticleByTopic