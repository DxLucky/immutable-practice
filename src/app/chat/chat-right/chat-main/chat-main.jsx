import React from 'react';

import './chat-main.scss';

class ChatMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const chatUser={
            avatar: require("../../../../asset/images/userAvatar.jpg"),
            msgFromSign:1,
            userName:"GM12388ll",
            dialogue:[
                {userName:"GM12388ll",time:"12:00:01",content:"顾客：我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗？",mark:0},
                {userName:"工号9527",time:"12:01:00",content:"客服：亲，欢迎咨询西门子旗舰店，我们将给您提供真挚的服务，本店最近大促，欢迎光临我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗我想了解一下这个，能给介绍下吗",mark:1},
                {userName:"GM12388ll",time:"12:02:02",content:"顾客：客户服务，主要体现了一种以客户为导向的价值观，它整合及管理在预先设定的最优成本",mark:0},
                {userName:"GM12388ll",time:"12:03:03",content:"顾客：服务组合中的客户界面的所有广义而言，任何能提高客户满意度的内容都属于用户服务的范围",mark:0},
                {userName:"工号9527",time:"12:04:03",content:"客服：OK，请核查订单详情，人工客服4000044433",mark:1},
            ]
        };
        return(
            <div className="chat-main">
                <ChartHeader chatUser={chatUser}/>
                <ul className="chart-body">
                    {
                        chatUser.dialogue.map((item,i)=>{
                            {
                                return item.mark === 0 ? (
                                    <li className="chart-customer dialogue" key={i}>
                                        <header>
                                            <span>{item.userName}</span>
                                            <span>({item.time})</span>
                                        </header>
                                        <section>
                                            {item.content}
                                        </section>
                                    </li>
                                ) :
                                    <li className="chart-service dialogue" key={i}>
                                        <header>
                                            <span>{item.userName}</span>
                                            <span>({item.time})</span>
                                        </header>
                                        <section>
                                            {item.content}
                                        </section>
                                    </li>
                            }
                        })
                    }
                    <li className="chart-comment">
                        亲，对我们的服务进行<span>评价</span>吧！
                    </li>
                </ul>
                <ChartFooter/>
            </div>
        )
    }
}


class ChartHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {chatUser}=this.props;
        return(
            <ul className="chat-header">
                <li>
                    <img src={chatUser.avatar}/>
                    <div>
                        <ul>
                            <li>
                                <span className="userName">{chatUser.userName}</span>
                                {(()=>{
                                        switch(chatUser.msgFromSign){
                                            case 1:return (
                                                <p>
                                                    <img src={require("../../../../asset/images/webIcon.png")}/>
                                                    <span className="msgFrom">来自Web</span>
                                                </p>
                                            );break;
                                            case 2:return (
                                                <p>
                                                    <img src={require("../../../../asset/images/appIcon.png")}/>
                                                    <span className="msgFrom">来自App</span>
                                                </p>
                                            );break;
                                            case 3:return (
                                                <p>
                                                    <img src={require("../../../../asset/images/wapIcon.png")}/>
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

class ChartFooter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="chat-footer">
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

export default ChatMain;