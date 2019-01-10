import React from 'react';
import classNames from 'classnames';
import VipInfo from './tabComponent/vip-info.jsx';
import ShortReply from './tabComponent/short-reply.jsx';
import QueryOrder from './tabComponent/query-order.jsx';
import QueryWorkOrder from './tabComponent/query-work-order.jsx';

import './chat-tab.scss';

class ChatTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topTab: [{name: '会员信息', active: true}, {name: '快捷回复'}, {name: '订单查询'}, {name: '工单查询'}],
            curIdx: 0,
            pop: false
        }
        this.changeTab = this.changeTab.bind(this);
        this.openPop = this.openPop.bind(this);
        this.closePop = this.closePop.bind(this);
        this.togglePop = this.togglePop.bind(this);
    }

    openPop(e) {
        this.togglePop();
    }
    
    closePop(e) {
        this.togglePop(false);
    }

    togglePop(pop = true) {
        this.setState({
            pop
        })
    }
    changeTab(idx) {
        const {curIdx} = this.state;
        if(idx != curIdx) {
            this.setState({
                curIdx: idx,
            })
        }
    }
    render() {
        const {topTab, curIdx, pop} = this.state;
        return(
            <div className="chat-tab">
                <div className="chat-tab-top">
                    <div onMouseEnter={this.openPop} onMouseLeave={this.closePop} className="tab-hover">
                        转接的会话
                        <ConversationPop className={classNames({active: pop})} />                    
                    </div>
                    <span data-type="2" className="tab-hover">排队中会话</span>
                    <span data-type="3" className="tab-hover">邀请会话</span>
                </div>
                <div className="chat-tab-content">
                    <ul className="chat-tab-items">
                        {
                            topTab.map((item, idx)=> {
                                return (
                                    <li onClick={()=>this.changeTab(idx)} key={`chat-tab-item-${idx}`} className={classNames('chat-tab-item', {active: idx == curIdx})}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="chat-tab-inner">
                        <VipInfo className={classNames("chat-tab-inner-content", {active: curIdx == 0})} />
                        <ShortReply className={classNames("chat-tab-inner-content", {active: curIdx == 1})} />
                        <QueryOrder className={classNames("chat-tab-inner-content", {active: curIdx == 2})} />
                        <QueryWorkOrder className={classNames("chat-tab-inner-content", {active: curIdx == 3})} />
                    </div>
                </div>
            </div>
        )
    }
}

class ConversationPop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul className={`conversation-pop ${this.props.className}`}>
                <li>
                    <p className="text">来自客服<span className="name">1</span>与<span className="name">GM10086</span>的对话</p>
                    <p className="btn">
                        <a href="javascript:;" title="同意转接" className="agree">同意转接</a>
                        <a href="javascript:;" title="忽略" className="overlook">忽略</a>
                    </p>
                </li>
                <li>
                    <p className="text">来自客服<span className="name">1</span>与<span className="name">GM10086</span>的对话</p>
                    <p className="btn">
                        <a href="javascript:;" title="同意转接" className="agree">同意转接</a>
                        <a href="javascript:;" title="忽略" className="overlook">忽略</a>
                    </p>
                </li>
                <li>
                    <p className="text">来自客服<span className="name">1</span>与<span className="name">GM10086</span>的对话</p>
                    <p className="btn">
                        <a href="javascript:;" title="同意转接" className="agree">同意转接</a>
                        <a href="javascript:;" title="忽略" className="overlook">忽略</a>
                    </p>
                </li>
                <li>
                    <p className="text">来自客服<span className="name">1</span>与<span className="name">GM10086</span>的对话</p>
                    <p className="btn">
                        <a href="javascript:;" title="同意转接" className="agree">同意转接</a>
                        <a href="javascript:;" title="忽略" className="overlook">忽略</a>
                    </p>
                </li>
                <li>
                    <p className="text">来自客服<span className="name">1</span>与<span className="name">GM10086</span>的对话</p>
                    <p className="btn">
                        <a href="javascript:;" title="同意转接" className="agree">同意转接</a>
                        <a href="javascript:;" title="忽略" className="overlook">忽略</a>
                    </p>
                </li>
            </ul>
        )
    }
}

export default ChatTab;