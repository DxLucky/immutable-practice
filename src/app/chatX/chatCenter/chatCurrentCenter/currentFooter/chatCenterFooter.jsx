import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import {immutableRenderDecorator} from "react-immutable-render-mixin";

@immutableRenderDecorator
class ChatCenterFooter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="ChatCenterFooter">
                <li>
                    <i className="iconfont icon-Smile"/>
                    <i className="iconfont icon-wenjianjia"/>
                    <i className="iconfont icon-jietu"/>
                    <i className="iconfont icon-aixinshoucangxihuan"/>
                </li>
                <li>
                    <textarea/>
                </li>
                <li>
                    <button className="sendMsgBtn">发送</button>
                </li>
            </ul>
        )
    }
}

export default ChatCenterFooter