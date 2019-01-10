import React from "react";
import classnames from "classnames";
import {fromJS,List} from "immutable";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import "./chatLeft.scss";
import asyncComponent from "../../../route/asyncComponent/asyncComponent.jsx";

const ChatCureent=asyncComponent(()=>import("./chatCurrent/chatCurrent.jsx"));
const ChatWorkMate=asyncComponent(()=>import("./chatWorkMate/chatWorkMate.jsx"));

@immutableRenderDecorator
class ChatLeft extends React.Component{
    constructor(props){
        super(props);
        this.state={
            $state:fromJS({
                activeChatTypeIndex:0
            })
        };
        this.onChangeChatType=this.onChangeChatType.bind(this);
    }
    onChangeChatType(index){
        this.setState(({$state})=>({
            $state:$state.update("activeChatTypeIndex",()=>index)
        }))
    }
    render(){
        let {$state}=this.state,
            chatType=fromJS([
                {text:"当前对话",type:"current"},
                {text:"同事对话",type:"workMate"}
            ]);
        return(
            <ul className="chatLeft">
                <li>
                    <div className="searchArea">
                        <input placeholder="搜索"/>
                        <div>
                            <i className="iconfont icon-icon-"/>
                        </div>
                    </div>
                    <ul className="chatType">
                        {
                            chatType.map((item,i)=>{
                                return(
                                    <li key={i} className={classnames({active:$state.get("activeChatTypeIndex")===i})}
                                        onClick={()=>{this.onChangeChatType(i)}}
                                    >
                                        <i className={`chatIcon ${item.get("type")}`}/>
                                        <span>{item.get("text")}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li>
                    {
                        $state.get("activeChatTypeIndex")===0 ?
                            <ChatCureent/>
                            :
                            <ChatWorkMate/>
                    }
                </li>
            </ul>
        )
    }
}

export default ChatLeft