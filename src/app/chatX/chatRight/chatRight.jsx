import React from "react";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import asyncComponent from "../../../route/asyncComponent/asyncComponent.jsx";
import "./chatRight.scss";

const ChatCurrentRight=asyncComponent(()=>import("./chatCurrent/chatCurrentRight.jsx"));

@immutableRenderDecorator
class ChatRight extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="chatRight">
                <ChatCurrentRight/>
            </div>
        )
    }
}

export default ChatRight