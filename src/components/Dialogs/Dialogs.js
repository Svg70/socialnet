import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { tsPropertySignature } from '@babel/types';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) => {
    let state = props.messagePage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageElement = React.createRef();
    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <textarea onChange={onMessageChange} ref={newMessageElement} className={s.textareaMessage} value={props.messagePage.newMessageText} />
            <button onClick={onAddMessage}>Send</button>
        </div>
    )
}

export default Dialogs;
