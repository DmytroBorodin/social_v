import userLogo from "../assets/images/user.jpg";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_TEXT_CHANGE = 'MESSAGE-TEXT-CHANGE';


let initialState = {
    componentName: 'messages',
    messagesSidebar: {
        mainUser: {
            className: 'main__user',
            userName: "John Doe",
            userPosition: 'Forntend Developer',
            userIcon: userLogo,
            status: 'none'
        },
        searchBlock: {
            className: 'dialogs',
            placeholder: 'Search',
        },
        dialogsList: [
            {
                userName: "Bni Jordan",
                userPosition: 'Web Designer',
                userIcon: user1,
                status: 'online'
            },
            {
                userName: "Katrina Karnagein",
                userPosition: 'Project Manager',
                userIcon: user2,
                status: 'offline'
            },
            {
                userName: "Calvin Klein",
                userPosition: 'Backend Developer',
                userIcon: user3,
                status: 'online'
            },
            {
                userName: "Jessie Monagan",
                userPosition: 'DevOPS',
                userIcon: user4,
                status: 'offline'
            },
            {
                userName: "Keri Job",
                userPosition: 'Team Lead',
                userIcon: user5,
                status: 'online'
            },
        ]
    },
    dialogBlock: {
        newMessageText: '',
        messagesList: [
            {
                id: 1,
                userIcon: user1,
                sendTime: '14:01',
                messageText: 'Hello! I need your help',
                className: '',
            },
            {
                id: 2,
                userIcon: userLogo,
                sendTime: '14:01',
                messageText: 'Hello! How can I help you?',
                className: 'main__user',
            },
            {
                id: 3,
                userIcon: user1,
                sendTime: '14:01',
                messageText: 'I cant find the design for my social network project.',
                className: '',
            },
            {
                id: 4,
                userIcon: userLogo,
                sendTime: '14:01',
                messageText: 'Ok, let me think',
                className: 'main__user',
            },
        ],
        typeMessageBlock: {
            searchBlock: {
                className: 'type__message',
                placeholder: 'Type your message',
            },
        }
    }
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 2,
                userIcon: userLogo,
                sendTime: '14:01',
                messageText: state.dialogBlock.newMessageText,
                className: 'main__user',
            }
            state.dialogBlock.messagesList.push(newMessage);
            state.dialogBlock.newMessageText = '';
            return state;
        case MESSAGE_TEXT_CHANGE:
            state.dialogBlock.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const messageTextChangeAC = (text) => ({type: MESSAGE_TEXT_CHANGE, messageText: text});

export default messagesReducer;