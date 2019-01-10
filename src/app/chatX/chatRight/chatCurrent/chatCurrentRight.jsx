import React from "react";
import {fromJS} from "immutable";
import Tab from "../../../../components/tab/tab.jsx";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import asyncComponent from "../../../../route/asyncComponent/asyncComponent.jsx";
const TabPane=Tab.TabPane;
import "./chatCurrentRight.scss";

const MemberMsg=asyncComponent(()=>import("./memberMsg/memberMsg.jsx"));

@immutableRenderDecorator
class ChatCurrentRight extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           [
               <ul className="rightHeader" key="rightHeader">
                   <li>转接的会话</li>
                   <li>排队中的会话</li>
               </ul>,
               <Tab key="tabContent"
               className="chatRightTab"
               $tabMenu={fromJS([
                                    {text:"会员信息"},
                                    {text:"快捷回复"},
                                    {text:"订单查询"},
                                    {text:"工单查询"}
                                ])}
                   >
                       <TabPane>
                           <MemberMsg/>
                       </TabPane>
                       <TabPane>
                            <div>这是第二项</div>
                       </TabPane>
                       <TabPane>
                            <div>这是第三项</div>
                       </TabPane>
                       <TabPane>
                            <div>这是第四项</div>
                       </TabPane>
                   </Tab>
           ]
        )
    }
}

export default ChatCurrentRight