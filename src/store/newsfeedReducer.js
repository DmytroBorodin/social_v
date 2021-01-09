import userLogo from "../assets/images/user.jpg";
const ADD_POST = 'ADD-POST';
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE';


let initialState = {
    componentName: 'newsfeed',
    createPost: {
        postBtns: [],
        newPostText: '',
        userIcon: userLogo,
    },
    posts: [
        {
            id: 1,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 2,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 3,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 4,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        }
    ]
};

const newsfeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                postText: state.createPost.newPostText,
                postedTime: 'Just now',
                userName: 'John Doe',
                userIcon: userLogo,
            }
            state.posts.push(newPost);
            state.createPost.newPostText = '';
            return state;
        case POST_TEXT_CHANGE:
            let newPostText = action.postText;
            state.createPost.newPostText = newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const postTextChangeAC = (text) => ({type: POST_TEXT_CHANGE, postText: text});

export default newsfeedReducer;