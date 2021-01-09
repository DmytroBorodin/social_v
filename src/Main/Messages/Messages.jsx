import React from "react";
import '../../css/Messages.css';
import MessagesSidebar from "./MessagesSidebar";
import DialogBlock from "./DialogBlock";


const Messages = (props) => {
    return (
        <div className={'component__wrap' + ' ' + props.state.componentName}>
            <div className="wrapper">
                <MessagesSidebar state={props.state.messagesSidebar} />

                <DialogBlock dispatch={props.dispatch} state={props.state.dialogBlock}/>
            </div>
        </div>
    )
}

export default Messages;