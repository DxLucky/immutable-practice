
import React from 'react';
import "./header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.tabContent = this.tabContent.bind(this);
        this.closeTab = this.closeTab.bind(this);
    }

    /**
     * 切换tab页面
     */
    tabContent(idx, key, e) {
        console.log('tab')
    }

    /**
     * 关闭tab页面
     */
    closeTab(idx, key, e) {
        e.stopPropagation();
        console.log('close', idx, key)
    }
    render() {
        const {tabs} = {tabs: [{name: '会话聊天', key: 'chat', active: true}]};//this.props;
        return (
            <div className="theader">
                <ul className="tab-nav">
                    {
                        tabs.map((item, idx)=>{
                            return (
                                <li key={`top-tab-${idx}`} className={`tab ${item.active ? 'active' : ''}`} onClick={(e)=>this.tabContent(idx, item.key, e)}>
                                    <span className="text">{item.name}</span>
                                    <i onClick={(e)=>this.closeTab(idx, item.key, e)} className="icon-close"></i>
                                </li>
                            )
                        })                    
                    }
                </ul>
                <p className="t-right-info">
                    今日累计接入：320020人，当前会话中人数：213人，<span className="cur-people">当前排队人数：15人</span>
                </p>
            </div>
        )
    }
}

export default Header;