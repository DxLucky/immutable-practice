import React from 'react';

import '../chat-left.scss';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memberList: [
                    {head: '', name: 'GM11GM11GM11GM11GM11GM11GM11GM11GM11GM11', message: '欢迎使用国美客服欢迎使用国美客服欢迎使用国美客服欢迎使用国美客服欢迎使用国美客服', time: '13:59', isOffline: true, active: true}, 
                    {head: '', name: 'GM11', message: '欢迎使用国美客服', time: '13:59', isOffline: true}, 
                    {head: '', name: 'GM12', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM13', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM14', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM15', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM16', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM17', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM18', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM19', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM110', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM111', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM112', message: '欢迎使用国美客服', time: '13:59', isOffline: true},
                    {head: '', name: 'GM113', message: '欢迎使用国美客服', time: '13:59', isOffline: false}
                ]
        }
    }

    render() {
        const {memberList} = this.state;
        return(
            <div className="member-item">
                {
                    memberList.map((item, idx)=> {
                        return(
                            <dl key={`member-item-${idx}`} className={`item${item.active ? ' active' : ''}`}>
                                <dt className="head"><img src={item.head ? item.head : require("../../../../asset/images/default-head.png")} alt=""/></dt>
                                <dd className="content">
                                    <p className="name-wrap">
                                        <span title={item.name} className="name">{item.name}
                                            {item.isOffline && <i className="tips">离线</i>}
                                        </span>
                                        <span className="time">{item.time}</span>
                                    </p>
                                    <p className="message" title={item.message}>{item.message}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>           
        )
    }
}

export default Member;