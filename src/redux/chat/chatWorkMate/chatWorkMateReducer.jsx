import {combineReducers} from "redux-immutable";
import memberGroupReducer from "./memberGroup/memberGroupReducer.jsx";//同事对话分组

const chatWorkMateReducer=combineReducers({
    $memberGroup:memberGroupReducer
});

export default chatWorkMateReducer