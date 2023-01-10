import {Routes, Route} from 'react-router-dom';
import SingleArticle from './SingleArticle';
import TopicArticleDisplay from './TopicArticleDisplay';

const Nav = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/" element={<TopicArticleDisplay />}
                ></Route>
                <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
            </Routes>
        </div>
    )
}

export default Nav;