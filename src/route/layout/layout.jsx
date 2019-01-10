import React from "react";
import {Route} from "react-router-dom";
import {fromJS} from "immutable";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import Aside from "./aside/aside.jsx";
import Header from "./header/header.jsx";
import asyncComponent from "../asyncComponent/asyncComponent.jsx";//按需加载
import "./layout.scss";
const Home=asyncComponent(()=>import("../../app/home/home.jsx"));//登录后主页
const Chat=asyncComponent(()=>import("../../app/chatX/chat.jsx"));//第一页
const Monitor=asyncComponent(()=>import("../../app/monitor/monitor.jsx"));//第二页

@immutableRenderDecorator
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let chatCount=fromJS({
            total:320202,
            current:231,
            queue:15
        });
        return(
            <div id="mainBox">
                <div className="bodyBox">
                    <Aside history={this.props.history}/>
                    <section className="sectionBody">
                        <ul className="headerArea">
                            <li>
                                <div className="btnTab">
                                    <span>会话聊天</span>
                                    <i className="iconfont icon-chahao"/>
                                </div>
                            </li>
                            <li>
                                <span>当日累计接入：{chatCount.get("total")}人，</span>
                                <span>当前会话中人数：{chatCount.get("current")}人，</span>
                                <span>当前排队人数：{chatCount.get("queue")}人</span>
                            </li>
                        </ul>
                        <section className="contentBody">
                            <Route exact path="/" component={Home}/>
                            <Route path="/chat" component={Chat}/>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}

export default Layout