import { useEffect, useState } from "react";
import { getArticles } from "../api";

const ArticleList = () => {

    const [articleList, setArticleList] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles().then(res => {
            setArticleList(res.data.articles)
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