import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import {fromJS} from "immutable";
import classnames from "classnames";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import Api from "../../../../api/api.jsx";
import * as chatCurrent from "../../../../redux/chat/chatCurrent/chatCurrentAction.jsx";
import "./chatCurrent.scss";


@connect(
    state=>({
        $memberArr:state.getIn(["$chatInfo","$chatCurrent","$memberList","listArr"]),
        $selectedList:state.getIn(["$chatInfo","$chatCurrent","$selectedList"])
    }),
    dispatch=>bindActionCreators({...chatCurrent}, dispatch)
)

@immutableRenderDecorator
class ChatCureent extends React.Component{
    static propTypes = {
        $memberArr:ImmutablePropTypes.list,
        $selectedList:ImmutablePropTypes.map,
        getChatCurrentData:PropTypes.func,
        onChangeSelectedIndex:PropTypes.func
    };
    constructor(props){
        super(props);
        this.onChangeChat=this.onChangeChat.bind(this);
        this.rebuildWords=this.rebuildWords.bind(this);
    }
    componentWillMount(){
        this.props.getChatCurrentData(Api.chatCurrent,{

        },this.props.$selectedList.get("index"));
    }
    onChangeChat(item,index){
        this.props.onChangeSelectedIndex(fromJS({
            index,
            memberName:item.get("userName")
        }))
    }
    rebuildWords(words){
        return words.length>9 ? `${words.slice(0,2)}****${words.slice(-4)}` : words
    }
    render(){
        let {$memberArr,$selectedList}=this.props;
        return(
            <ul className="currentChat">
                {
                    $memberArr.map((item,i)=>{
                        return(
                            <li key={i} className={classnames({activeChat:$selectedList.get("index")===i})}
                                onClick={()=>{this.onChangeChat(item,i)}}
                            >
                                <div className="avatarWrap">
                                    <img src={require("../../../../asset/images/userAvatar.jpg")}/>
                                </div>
                                <div className="memberInfo">
                                    <ul>
                                        <li>
                                            <span>
                                                {this.rebuildWords(item.get("userName"))}
                                            </span>
                                            {
                                                item.get("onlineState")===1 && <button>离线</button>
                                            }
                                        </li>
                                        <li>
                                            <i className="iconfont icon-shizhong1"/>
                                            <span>{item.get("time")}</span>
                                        </li>
                                    </ul>
                                    <p className="lastMsg">
                                        {item.get("lastMsg")}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ChatCureent