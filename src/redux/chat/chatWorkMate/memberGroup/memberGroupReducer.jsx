import {fromJS} from "immutable";
import Util from "../../../../components/util/util.jsx";

export default function memberListReducer(
    $memberGroup=fromJS({
        listArr:[{
            sign:100
        }],
    }),
    action) {
    switch (action.type) {
        case "STORE_ChAT_WORKMATE_DATA":
            return Util.filterMerge($memberGroup,action.data);
        case "CHANGE_GROUP_SPREAD_STATE":
            return $memberGroup.update("listArr",()=>($memberGroup.get("listArr").updateIn([action.data.index,"spreadState"],()=>action.data.spreadState)));
        default:
            return $memberGroup
    }
}