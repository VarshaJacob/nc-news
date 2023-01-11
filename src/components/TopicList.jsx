import {getTopics} from '../api';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'

const TopicList = () => {

    const [topicList, setTopicList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    

    useEffect (() => {
        setIsLoading(true)
        getTopics().then(res => {
            setTopicList(res.topics.map(topic => {return topic.slug}))
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <p className="Loading">Loading ...</p>
    }

    return (
        <div>
            <ol className='TopicList'>
                {topicList.map(topic => {
                    return (
                             <Link to={`/${topic}`} style={{textDecoration:'none'}} className='Topic'>
                            <li>
                                {topic[0].toUpperCase()+topic.slice(1)}
                            </li>
                        </Link>
                    )
                })}
            
            <Link to={'/'} style={{textDecoration:'none'}} className='Topic'><li>All</li></Link>
            </ol>
        </div>
    )
};

export default TopicList;