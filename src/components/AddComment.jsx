import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({article_id}) => {

    const [commentInput, setCommentInput] = useState("")
    const [addedCommentList, setAddedCommentList] = useState([])
    const [isPosting,setIsPosting] = useState(false)
    const [isPosted,setIsPosted] = useState(false)


    const commentPost = (e) => {
        e.preventDefault();
        if (commentInput.length === 0) {
            e.preventDefault();
            setIsPosted(false)
        } else {
            setIsPosting(true)
            postComment(article_id,commentInput)
            .then(res => {
                setIsPosting(false)
                setIsPosted(true)
                setAddedCommentList((currList) => [...currList,res.comment])
            })
            setCommentInput("")
        }
    }

    return (
        <div>
            <form className="AddComment" onSubmit={commentPost}>
            <textarea type="text" placeholder="Comment..." value={commentInput} className="AddCommentInput" required onChange={(e) => setCommentInput(e.target.value)}></textarea>
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