import React from "react";
import '../../css/Newsfeed.css';
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";


const Newsfeed = (props) => {

    let postsArr = props.state.posts.map(post => <Post id={post.id} postText={post.postText}                                                                                  postedTime={post.postedTime}
                                                                    userName={post.userName}
                                                                    userIcon={post.userIcon} />)

    return (
        <div className={'component__wrapper' + ' ' + props.state.componentName}>
            <div className="left__side">
                <CreatePost dispatch={props.dispatch}
                            state={props.state.createPost}/>
                <div className="posts__block">
                    {postsArr}
                </div>
            </div>
            <div className="right__side">

            </div>
        </div>
    )
}

export default Newsfeed;