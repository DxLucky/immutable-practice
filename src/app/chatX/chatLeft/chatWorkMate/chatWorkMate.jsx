import React from "react";
import {fromJS} from "immutable";
import {bindActionCreators} from "redux"
import {connect} from "react-redux";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import Api from "../../../../api/api.jsx";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import * as chatWorkMate from "../../../../redux/chat/chatWorkMate/chatWorkMateAction.jsx";
import "./chatWorkMate.scss";

@connect(
    state=>({
        $groupArr:state.getIn(["$chatInfo","$chatWorkMate","$memberGroup","listArr"])
    }),
    dispatch=>bindActionCreators({...chatWorkMate}, dispatch)
)

@immutableRenderDecorator
class ChatWorkMate extends React.Component{
    static propTypes = {
        $groupArr:ImmutablePropTypes.list,
        onChangeGroupSpread:PropTypes.func
    };
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getChatWorkMateData(Api.chatWorkMate,{

        });
    }
    render(){
       let {$groupArr,onChangeGroupSpread}=this.props;
        return(
            <div className="charWorkMate">
                {
                    $groupArr.map((item,i)=>{
                        return(
                            <div className="mateGroup" key={i}>
                                <header onClick={()=>{
                                   onChangeGroupSpread({
                                       index:i,
                                       spreadState:!item.get("spreadState")
                                   })
                                }}>
                                    <i/>
                                    <span>{item.get("title")}</span>
                                    <span>（{item.get("onLineRate")}）</span>
                                </header>
                                {item.get("spreadState") ?
                                    <ul>
                                        {
                                            item.get("member").map((member,j)=>{
                                                return(
                                                    <li key={j}>
                                                        <div className="avatarWrap">
                                                            <img src={require("../../../../asset/images/userAvatar.jpg")}/>
                                                            {(()=>{
                                                                    switch(member.get("state")){
                                                                        case 0:return <i className="lineState online"/>;break;
                                                                        case 1:return <i className="lineState offline"/>;break;
                                                                        case 2:return <i className="lineState leaveline"/>;break;
                                                                    }
                                                                }
                                                            )()}
                                                        </div>
                                                        <div className="memberInfo">
                                                            <span>{member.get("userName")}</span>
                                                            <span>{member.get("userId")}</span>
                                                            {(()=>{
                                                                    switch(member.get("state")){
                                                                        case 0:return <span>（在线）</span>;break;
                                                                        case 1:return <span>（离线）</span>;break;
                                                                        case 2:return <span>（离开）</span>;break;
                                                                    }
                                                                }
                                                            )()}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>:null
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ChatWorkMate