import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Link } from 'react-router-dom';

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
        return <p>Loading ...</p>
    }

    return (
        <div>
            <section className="ArticleDetails">
            <h2 className='ArticleTitle'>{articleDisplay.title}</h2>
            <p className='ArticleAuthor'>Author: {articleDisplay.author}</p>
            <p className='ArticleDate'>{articleDisplay.created_at} </p>
            <p className='ArticleBody'>{articleDisplay.body}</p>
            <p className='ArticleVotes'>Votes: {articleDisplay.votes}</p>
            </section>
            <section className="VoteSection">
            <button className="UpVoteButton"></button>
            <button className="DownVoteButton"></button>
            </section>
            <section className="VoteSection">
                <Link to={`/articles/${articleDisplay.article_id}/comments`} style={{textDecoration:'none'}}>
                <button className="CommentButton">Comment</button>
                </Link>
            </section>
            
        </div>
       
    )
};

export default SingleArticle;