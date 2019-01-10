import {fromJS} from "immutable";
import Util from "../../../../components/util/util.jsx";

export default function dialogueReducer(
    $dialogue=fromJS({
        msgFromSign:1,
        userName:"",
        dialogue:[]
    }),
    action) {
    switch (action.type) {
        case "STORE_ChAT_CURRENT_DIALOGUE_DATA":
            return Util.filterMerge($dialogue,action.data);
        default:
            return $dialogue
    }
}