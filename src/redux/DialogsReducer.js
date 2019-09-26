import { switchCase } from "@babel/types";
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialstate = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],
  //   { message: 'cxbxbdf' },
  //   { message: 'La la la la' },
  //   { message: 'fdbhbgsd' },
  //   { message: 'tjgcnvfn' },
  // ],
  newMessageText: 'ГусИ га га га'
};

const dialogsReducer = (state = initialstate, action) => {


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };


    case ADD_MESSAGE:
      let text = state.newMessageText;

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 6, message: text }]
      };

    // newState.newMessageText = action.newText;
    // return newState;

    default:
      return state;
  }
}
export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export let updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, text: text
  }
}

export default dialogsReducer