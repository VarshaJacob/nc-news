import {Routes, Route} from 'react-router-dom';
import SingleArticle from './SingleArticle';
import CommentList from './CommentList';
import ArticleList from './ArticleList'

const Nav = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/" element={<ArticleList />}
                ></Route>
                <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
                <Route path="/:topic" element={<ArticleList />}></Route>
            </Routes>
        </div>
    )
}

export default Nav;