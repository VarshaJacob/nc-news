import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleVotes from "./ArticleVotes";
import CommentList from "./CommentList";

const SingleArticle = () => {

    const {article_id} = useParams()
    const [articleDisplay, setArticleDisplay] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then(res => {
            setArticleDisplay(res.article)
            setIsLoading(false)
        })
    },[article_id])

    if (isLoading) {
        return <p className="Loading">Loading ...</p>
    }
    return (
        <div>
            <section className="ArticleDetails">
            <h2 className='ArticleTitle'>{articleDisplay.title}</h2>
            <p className='ArticleAuthor'>Author: {articleDisplay.author}</p>
            <p className='ArticleDate'>{articleDisplay.created_at} </p>
            <p className='ArticleBody'>{articleDisplay.body}</p>
            <ArticleVotes article_id={articleDisplay.article_id} articleVotes={articleDisplay.votes}/>
            </section>
            <section className="CommentList">
                <details><summary>Comments</summary>
                    <CommentList />
                </details>
            </section>
        </div>
       
    )
};

export default SingleArticle;