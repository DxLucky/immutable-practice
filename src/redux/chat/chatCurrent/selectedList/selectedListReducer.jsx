import {fromJS} from "immutable";
import Util from "../../../../components/util/util.jsx";

export default function selectedListReducer(
    $selectedList=fromJS({
        index:0,
        memberName:""
    }),
    action) {
    switch (action.type) {
        case "STORE_ChAT_CURRENT_SELECTEDINDEX":
            return Util.filterMerge($selectedList,action.data);
        default:
            return $selectedList
    }
}