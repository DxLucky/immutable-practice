import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import {connect} from "react-redux";

@connect(
    state=>({
        $selectedList:state.getIn(["$chatInfo","$chatCurrent","$selectedList"]),
        $dialogue:state.getIn(["$chatInfo","$chatCurrent","$dialogue"])
    }),
    null
)

@immutableRenderDecorator
class ChatCenterHeader extends React.Component{
    static propTypes = {
        $selectedList:ImmutablePropTypes.map,
        $dialogue:ImmutablePropTypes.map,
    };
    constructor(props){
        super(props)
    }
    render(){
        let {$dialogue,$selectedList}=this.props;
        return(
            <ul className="chatCenterHeader">
                <li>
                    <img src={require("../../../../../asset/images/userAvatar.jpg")}/>
                    <div>
                        <ul>
                            <li>
                                <span className="userName">{$selectedList.get("memberName")}</span>
                                {(()=>{
                                        switch($dialogue.get("msgFromSign")){
                                            case 1:return (
                                                <p>
                                                    <img src={require("../../../../../asset/images/webIcon.png")}/>
                                                    <span className="msgFrom">来自Web</span>
                                                </p>
                                            );break;
                                            case 2:return (
                                                <p>
                                                    <img src={require("../../../../../asset/images/appIcon.png")}/>
                                                    <span className="msgFrom">来自App</span>
                                                </p>
                                            );break;
                                            case 3:return (
                                                <p>
                                                    <img src={require("../../../../../asset/images/wapIcon.png")}/>
                                                    <span className="msgFrom">来自Wap</span>
                                                </p>
                                            );break;
                                        }
                                    }
                                )()}
                            </li>
                            <li>
                                <i className="iconfont icon-yuandianzhong"/>
                                <span className="entryState">对方正在输入消息...</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button>请求协同</button>
                    <button>转接对话</button>
                    <button>结束对话</button>
                </li>
            </ul>
        )
    }
}

export default ChatCenterHeader