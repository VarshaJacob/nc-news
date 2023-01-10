import { useEffect, useState } from "react";
import { patchArticleUpVote } from "../api";

const ArticleVotes = ({article_id,articleVotes}) => {

    const [updateArticleVotes, setUpdateArticleVotes] = useState(0)
    const [voteChange,setVoteChange] = useState(0)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setUpdateArticleVotes(articleVotes)
    },[])
    
    const updateVote = (changeVote) => {
        setIsError(false)
        setVoteChange(changeVote)
        setUpdateArticleVotes((currVote) => currVote+voteChange)
        patchArticleUpVote(article_id,changeVote)
        .then(res => {
            setUpdateArticleVotes(res.updatedArticle.votes)
            setUpdateArticleVotes((currVote) => currVote-voteChange)
            setVoteChange(0)
        })
        .catch(err => {
            setIsError(true)
            setVoteChange(0)
        })

    }

    return ( 
    <div>
        <section>
        <p className='ArticleVotes'>Votes: {updateArticleVotes}</p>
        </section>
        <section className="VoteSection">
        <button className="UpVoteButton" onClick={() => updateVote(1)}></button>
        <button className="DownVoteButton" onClick={() => updateVote(-1)}></button>
        </section>
        {isError?<p>Votes couldnt be updated</p>:null}
    </div>
    )
};

export default ArticleVotes