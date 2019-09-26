import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import usersReducer from "./UsersReducer";

let redusers = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    usersPage: usersReducer
});
let store = createStore(redusers);
export default store;
