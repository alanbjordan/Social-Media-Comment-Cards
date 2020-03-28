import React from 'react';
import CommentDetail from './components/CommentDetail'

const commentArray = [];
const comment = () => {
    let i = 0;
    for (i = 0; i < 1000; i++) {
        commentArray.push(<CommentDetail />)
    }
    console.log(commentArray);
}
comment();

const App = () => {
    return (
        <div className="ui container comments">
            { commentArray }
        </div>
    )
}

export default App;
