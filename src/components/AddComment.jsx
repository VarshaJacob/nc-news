import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({article_id}) => {

    const [commentInput, setCommentInput] = useState("")
    const [newComment,setNewComment] = useState("")
    const [addedCommentList, setAddedCommentList] = useState([])
    const [dataValid, setDataValid] = useState(true)
    const [isPosting,setIsPosting] = useState(false)
    const [isPosted,setIsPosted] = useState(false)


    const commentPost = (e) => {
        e.preventDefault();
        if (commentInput.length === 0) {
            e.preventDefault();
            setDataValid(false)
            setIsPosted(false)
        } else {
            setDataValid(true)
            setIsPosting(true)
            postComment(article_id,commentInput)
            .then(res => {
                console.log(res)
                setIsPosting(false)
                setIsPosted(true)
                setNewComment(res.comment)
                setAddedCommentList((currList) => [...currList,res.comment])
            })
            setCommentInput("")
        }
    }

    return (
        <div>
            <form className="AddComment" onSubmit={commentPost}>
            <input type="text" placeholder="Comment..." value={commentInput} className="AddCommentInput" onChange={(e) => setCommentInput(e.target.value)}></input>
            {dataValid?null:<p>Please enter a comment</p>}
            {isPosting?<p>Posting....</p>:null}
            <button className="PostButton">Post</button>
        </form>
        {isPosted? 
        <ol className="CommentList">
            {addedCommentList.map(comment => {
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
            :null}
        </div>
        
    )
};

export default AddComment;