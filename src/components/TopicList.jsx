import {getTopics} from '../api';
import { useState,useEffect } from 'react';
import '../App.css'

const TopicList = () => {

    const [topicList, setTopicList] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect (() => {
        setIsLoading(true)
        getTopics().then(res => {
            setTopicList(res.data.topics.map(topic => {return topic.slug}))
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <div className='TopicList'>
            <form>
                {topicList.map(topic => {
                    return (
                        <div className='Topic'>
                            <input
                            type='checkbox'
                            name={topic}
                            value={topic}
                            id={topic}>
                            </input>
                            <label>{topic[0].toUpperCase()+topic.slice(1)}</label>
                        </div>
                    )})}
                    <button className='FilterButton'>Filter</button>
            </form>
        </div>
    )
};

export default TopicList;