import {combineReducers} from "redux-immutable";
import chatCurrentReducer from "./chatCurrent/chatCurrentReducer.jsx";//当前对话
import chatWorkMateReducer from "./chatWorkMate/chatWorkMateReducer.jsx";//同事对话

const chatReducer=combineReducers({
    $chatCurrent:chatCurrentReducer,
    $chatWorkMate:chatWorkMateReducer
});

export default chatReducer
