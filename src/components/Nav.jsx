import {Routes, Route} from 'react-router-dom';
import TopicArticleDisplay from './TopicArticleDisplay';

const Nav = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/" element={<TopicArticleDisplay />}
                ></Route>
            </Routes>
        </div>
    )
}

export default Nav;