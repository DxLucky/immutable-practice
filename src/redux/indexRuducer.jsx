import {combineReducers} from "redux-immutable";
import chatReducer from "./chat/chatReducer.jsx";//聊天页面

const indexReducer=combineReducers({
    $chatInfo:chatReducer
});

export default indexReducer