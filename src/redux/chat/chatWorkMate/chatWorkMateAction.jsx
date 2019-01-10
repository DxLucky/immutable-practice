import Util from "../../../components/util/util.jsx";

const getChatWorkMateData=(url,body)=>(dispatch)=>{
    Util.fetchHandler({url,body,type:"get"}).then((data)=>{
        let formatData=data.update("listArr",()=>(
            data.get("listArr").map((item,i)=>{
               return item.mergeDeep({spreadState:false})
              })
        ));
        dispatch({
            type:"STORE_ChAT_WORKMATE_DATA",
            data:formatData
        })
    })
};

const onChangeGroupSpread=(data)=>({
    type:"CHANGE_GROUP_SPREAD_STATE",
    data
});


export {getChatWorkMateData,onChangeGroupSpread}