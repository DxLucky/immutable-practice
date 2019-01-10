import React from "react";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import asyncComponent from "../../../../route/asyncComponent/asyncComponent.jsx";
import Api from "../../../../api/api.jsx";
import {connect} from "react-redux";
import * as chatCurrent from "../../../../redux/chat/chatCurrent/chatCurrentAction.jsx";
import "./chatCurrentCenter.scss";

const ChatCenterHeader=asyncComponent(()=>import("./currentHeader/chatCenterHeader.jsx"));
const ChatCenterFooter=asyncComponent(()=>import("./currentFooter/chatCenterFooter.jsx"));
const ChatCenterBody=asyncComponent(()=>import("./currentBody/chatCenterBody.jsx"));

@connect(
    state=>({
        $selectedList:state.getIn(["$chatInfo","$chatCurrent","$selectedList"])
    }),
    dispatch=>bindActionCreators({...chatCurrent}, dispatch)
)


@immutableRenderDecorator
class ChatCurrentCenter extends React.Component {
    static propTypes = {
        $selectedList:ImmutablePropTypes.map,
        getChatCurrentDialogueData:PropTypes.func
    };
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        // console.log(this.props.$selectedList.toJS(),'$selectedList')
        this.props.getChatCurrentDialogueData(Api.currentDialogue,{

        });
    }
    componentWillReceiveProps(){
        this.props.getChatCurrentDialogueData(Api.currentDialogue,{

        });
    }
    render() {
        return(
            <div className="ChatCurrentCenter">
                <ChatCenterHeader/>
                <ChatCenterBody/>
                <ChatCenterFooter/>
            </div>
        )
    }
}




export default ChatCurrentCenter;