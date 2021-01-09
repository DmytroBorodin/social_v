
let initialState = {
    menuItems: [
        {
            id: 1,
            itemName: 'My Newsfeed',
            path: 'newsfeed',
            iconName: 'newspaper',
        },
        {
            id: 1,
            itemName: 'My Profile',
            path: 'profile',
            iconName: 'user',
        },
        {
            id: 1,
            itemName: 'My Messages',
            path: 'messages',
            iconName: 'message',
        },
        {
            id: 1,
            itemName: 'My Friends',
            path: 'friends',
            iconName: 'friends',
        }
    ]
};

const sidebarReducer  = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;