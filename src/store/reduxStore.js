import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import newsfeedReducer from "./newsfeedReducer";
import messagesReducer from "./messagesReducer";


let reducers = combineReducers(
    {
        sidebar: sidebarReducer,
        newsfeed: newsfeedReducer,
        messages: messagesReducer
    }
)

let store = createStore(reducers);

export default store;