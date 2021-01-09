import React from "react";
import Newsfeed from "./Newsfeed/Newsfeed";
import {Route} from "react-router-dom";
import '../css/Main.css';
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";


const Main = (props) => {
    return (
        <main className="main">
            <Route path={'/newsfeed'} render={() => <Newsfeed dispatch={props.dispatch}
                                                              state={props.state.newsfeed}/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/messages'} render={() => <Messages dispatch={props.dispatch}
                                                              state={props.state.messages}/>}/>
            <Route path={'/friends'} render={() => <Friends/>}/>
        </main>
    )
}

export default Main;