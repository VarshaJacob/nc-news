import { useEffect, useState } from "react";
import { patchArticleVote } from "../api";

const ArticleVotes = ({article_id,articleVotes}) => {

    const [userVote, setUserVote] = useState(0)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setUserVote(articleVotes)
    },[articleVotes])
    
    const updateVote = (changeVote) => {
        setIsError(false)
        setUserVote((currVote) => currVote+changeVote)
        patchArticleVote(article_id,changeVote)
        .catch(err => {
            setIsError(true)
            setUserVote((currVote) => currVote-changeVote)
        })

    }

    return ( 
    <div>
        <section>
        <p className='ArticleVotes'>Votes: {userVote}</p>
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