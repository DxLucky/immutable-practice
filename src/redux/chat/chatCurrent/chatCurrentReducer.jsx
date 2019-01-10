import {combineReducers} from "redux-immutable";
import memberListReducer from "./memberList/memberListReducer.jsx";//当前对话用户列表
import selectedListReducer from "./selectedList/selectedListReducer.jsx";//当前对话选中用户
import dialogueReducer from "./dialogue/dialogueReducer.jsx";//当前对话正文

const chatCurrentReducer=combineReducers({
    $memberList:memberListReducer,
    $selectedList:selectedListReducer,
    $dialogue:dialogueReducer
});

export default chatCurrentReducer