import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

const SingleArticle = () => {

    const {article_id} = useParams()
    const [articleDisplay, setArticleDisplay] = useState([])

    useEffect(() => {
        getArticleById(article_id).then(res => {
            setArticleDisplay(res.article)
        })
    },[article_id])

    return (
        <div>
            <h2>{articleDisplay.title}</h2>
            <p>Author: {articleDisplay.author}</p>
            <p>{articleDisplay.created_at} </p>
            <p>{articleDisplay.body}</p>
            <button className="VoteButton"><img src='https://static.thenounproject.com/png/343589-200.png' className="VoteButton"></img></button><button className="VoteButton"><img src='https://thenounproject.com/api/private/icons/4190940/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjvEOFx2e2Pe3ZUukY1S-TBJFP06W0vLseWJGfdzNDKcv9Ui80o6hl63IQrTdDulWYs2SpzM180kP1dG4fgaRJlFYR4w%3D%3D' className="VoteButton"></img></button><button className="VoteCount">{articleDisplay.votes}</button>
        </div>
       
    )
};

export default SingleArticle;