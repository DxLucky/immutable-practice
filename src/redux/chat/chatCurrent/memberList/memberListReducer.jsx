import {fromJS} from "immutable";
import Util from "../../../../components/util/util.jsx";

export default function memberListReducer(
    $memberList=fromJS({
        listArr:[],
    }),
    action) {
    switch (action.type) {
        case "STORE_ChAT_CURRENT_DATA":
            return Util.filterMerge($memberList,action.data);
        default:
            return $memberList
    }
}