import React from "react";
import MessageCard from "./MessageCard";
import {addMessageAC, messageTextChangeAC} from "../../store/messagesReducer";

const DialogBlock = (props) => {

    let messagesList = props.state.messagesList.map(message => <MessageCard id={message.id}
                                                                            userIcon={message.userIcon}
                                                                            sendTime={message.sendTime}
                                                                            messageText={message.messageText}
                                                                            className={message.className}/>);

    let input = React.createRef();

    let addMessage = () => {
        let action = addMessageAC()
        props.dispatch(action);
    }
    let messageTextChange = () => {
        let messageText = input.current.value;
        let action = messageTextChangeAC(messageText);
        props.dispatch(action);
    }

    return (
        <div className={'dialog__block'}>
            <div className="messages__block">
                {messagesList}
            </div>
            <div className="type__message__block">
                <div className="ic__btns__block">
                    <button>
                        <span className="icon-smile">

                        </span>
                    </button>
                    <button>
                        <span className="icon-paper-clip"><span className="path1">

                        </span><span
                            className="path2">

                        </span></span>
                    </button>
                </div>
                <div className={'search__block' + ' ' + props.state.typeMessageBlock.searchBlock.className}>
                    <input className="search__input" ref={input}
                           value={props.state.newMessageText}
                           onChange={messageTextChange}
                           placeholder={props.state.typeMessageBlock.searchBlock.placeholder}/>
                </div>
                <div className="send__block">
                    <button className="send__btn" onClick={addMessage}>
                        <span className="icon-send">

                        </span>
                        <span className="btn__title">
                            Send
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DialogBlock;