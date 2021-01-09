import React from "react";
import '../../../css/CreatePost.css';
import ComponentTitleBlock from "../../ComponentTitleBlock/ComponentTitleBlock";
import {addPostAC, postTextChangeAC} from "../../../store/newsfeedReducer";


const CreatePost = (props) => {

    let inputBlock = React.createRef();

    let createPost = () => {
        let postText = inputBlock.current.value;
        let action = addPostAC();
        props.dispatch(action);
    }

    let postTextChange = () => {
        let postText = inputBlock.current.value;
        let action = postTextChangeAC(postText);
        props.dispatch(action);
    }

    return (
        <div className={'createPost__wrapper'}>
            <ComponentTitleBlock compTitle={'Create Post'}/>
            <div className="creat__post__body">
                <div className="user__icon">
                    <img alt={'user'} className={'user__post__img'} src={props.state.userIcon}/>
                </div>
                <textarea className="post__input" placeholder={'Write something...'}
                          value={props.state.newPostText}
                          ref={inputBlock}
                          onChange={postTextChange}/>
            </div>
            <div className="create__post__footer">
                <button className="create__post__btn" onClick={createPost}>
                    Create Post
                </button>
            </div>
        </div>
    )
}

export default CreatePost;