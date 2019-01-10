import React from "react";
import "./chat.scss";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import asyncComponent from "../../route/asyncComponent/asyncComponent.jsx";

const ChatLeft=asyncComponent(()=>import("./chatLeft/chatLeft.jsx"));
const ChatCenter=asyncComponent(()=>import("./chatCenter/chatCenter.jsx"));
const ChatRight=asyncComponent(()=>import("./chatRight/chatRight.jsx"));

@immutableRenderDecorator
class Chat extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="chatBox">
                <ChatLeft/>
                <ChatCenter/>
                <ChatRight/>
            </div>
        )
    }
}

export default Chat