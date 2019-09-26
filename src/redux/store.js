import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";


let store ={
  _state: {
    profilePage: {
      posts: [
        { id: 1, postMess: 'Привет? ', postLike: '33' },
        { id: 2, postMess: 'Пока', postLike: '22' },
        { id: 3, postMess: 'иввиыв', postLike: '11' },
        { id: 4, postMess: 'Привет', postLike: '33' },
        { id: 5, postMess: 'Пока', postLike: '22' },
        { id: 6, postMess: 'Там вдали за рекой', postLike: '11' },
      ],
      newPostText: 'it'
    },
    messagePage: {
      dialogs:[
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      ],
      messages: [
        { message: 'cxbxbdf' },
        { message: 'La la la la' },
        { message: 'fdbhbgsd' },
        { message: 'tjgcnvfn' },
      ],
      newMessageText: 'ГусИ га га га'
    }
},
_callSubscriber() {
  console.log('State changed');
},

getState() {
  
  return this._state;
},
subscribe(observer) {
  this._callSubscriber = observer;  
},
dispatch(action){
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.messagePage = dialogsReducer(this._state.messagePage, action);
  
  this._callSubscriber(this._state);
}
    }
   
export default store;
window.store= store;