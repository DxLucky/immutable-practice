import React from "react";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import asyncComponent from "../../../route/asyncComponent/asyncComponent.jsx";
import "./chatCenter.scss";
const ChatCurrentCenter=asyncComponent(()=>import("./chatCurrentCenter/chatCurrentCenter.jsx"));//当前对话

@immutableRenderDecorator
class ChatCenter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="chatCenter">
                <ChatCurrentCenter/>
            </div>
        )
    }
}

export default ChatCenter