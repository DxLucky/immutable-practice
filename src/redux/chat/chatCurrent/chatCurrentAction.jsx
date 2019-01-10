import Util from "../../../components/util/util.jsx";
import {fromJS} from "immutable";

const getChatCurrentData=(url,body,selectIndex=0)=>(dispatch)=>{
    Util.fetchHandler({url,body,type:"get"}).then((data)=>{
        dispatch({
            type:"STORE_ChAT_CURRENT_DATA",
            data
        });
        selectIndex===0 && dispatch({
            type:"STORE_ChAT_CURRENT_SELECTEDINDEX",
            data:fromJS({
                index:0,
                memberName:data.getIn(["listArr",0,"userName"])
            })
        })
    })
};

const getChatCurrentDialogueData=(url,body)=>(dispatch)=>{
    Util.fetchHandler({url,body,type:"get"}).then((data)=>{
        dispatch({
            type:"STORE_ChAT_CURRENT_DIALOGUE_DATA",
            data
        });
    })
};

const onChangeSelectedIndex=(data)=>({
    type:"STORE_ChAT_CURRENT_SELECTEDINDEX",
    data
});

export {getChatCurrentData,onChangeSelectedIndex,getChatCurrentDialogueData}