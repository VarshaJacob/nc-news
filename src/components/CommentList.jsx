import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticle } from "../api";
import AddComment from "./AddComment";


const CommentList = () => {

    const {article_id} = useParams()
    const [commentList, setCommentList] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticle(article_id).then(res => {
            setCommentList(res.comments)
            setIsLoading(false)
        })
    },[article_id])



    if (isLoading) {
        return <p className="Loading">Loading ...</p>
    }

    return (
        <div className="CommentList">
            <ol>
                {commentList.map(comment => {
                    return (
                        <li className="CommentDetails" key={comment.comment_id}>
                        <p className="CommentAuthor">Author: {comment.author}</p>
                        <p className="CommentBody">{comment.body}</p>
                        <p className="CommentVotes">Votes: {comment.votes}</p>
                        <section className="VoteSection">
                        <button className="UpVoteButton"></button>
                        <button className="DownVoteButton"></button>
                        </section>
                        </li>
                    )
                })}
            </ol>
            <AddComment />
        </div>
    )
};

export default CommentList;