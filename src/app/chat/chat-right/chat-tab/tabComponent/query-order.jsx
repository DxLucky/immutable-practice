import React from 'react';
import classNames from 'classnames';

import '../chat-tab.scss';

class QueryOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderIdx: 0
        }
        this.changeOrderIdx = this.changeOrderIdx.bind(this);
    }

    changeOrderIdx(idx) {
        const {orderIdx} = this.state;
        if(idx != orderIdx) {
            this.setState({
                orderIdx: idx
            })
        }

    }

    render() {
        const {orderIdx} = this.state;
        return (
            <div className={`chat-inner-content chat-inner-query-content ${this.props.className}`}>
                <div className="short-reply-search">
                    <span className="text">订单号：</span>
                    <input className="ipt" placeholder="" type="text"/>
                    <a className="btn" href="javascript:;">搜索</a>
                </div>
                <div className="query-bottom">
                    <ul className="order-tab">
                        <li onClick={()=>this.changeOrderIdx(0)} className={classNames("order-tab-item", {active: orderIdx == 0})}>线上订单</li>
                        <li onClick={()=>this.changeOrderIdx(1)} className={classNames("order-tab-item", {active: orderIdx == 1})}>线下订单</li>
                    </ul>
                    <div className="order-tab-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>下单时间</th>
                                    <th>配送单号</th>
                                    <th>商品</th>
                                    <th>订单号</th>
                                    <th className="last">状态</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2017-10-24</td>
                                    <td>3645784545452</td>
                                    <td>格力空调GGG</td>
                                    <td>383747373</td>
                                    <td className="last">已完成</td>
                                </tr>
                                <tr>
                                    <td>2017-10-24</td>
                                    <td>3645784545452</td>
                                    <td>格力空调GGG</td>
                                    <td>383747373</td>
                                    <td className="last">已完成</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="item single-item">
                        {
                            orderIdx == 0
                            ?
                            <ul className="lists">
                                <li className="list">下单时间：2018-4-13 13:40:06</li>
                                <li className="list">订单号：12222222222</li>
                                <li className="list">订单渠道：北京国美</li>
                                <li className="list">配送单号：122222233344</li>
                                <li className="list">安装单号：999999</li>
                                <li className="list">订单状态：配送中</li>
                                <li className="list">订单金额：&yen;1619.00</li>
                                <li className="list">订单类型：普通</li>
                                <li className="list">订单商品：席梦思</li>
                                <li className="list">收货人：李浩</li>
                                <li className="list">收货地址：江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号</li>
                            </ul>
                            :
                            <ul className="lists">
                                <li className="list">分部：河南</li>
                                <li className="list">门店：河北门店</li>
                                <li className="list">客户姓名：李雪</li>
                                <li className="list">提货单号：124545454</li>
                                <li className="list">购买商品：席梦思</li>
                                <li className="list">购物时间：2018年4月13日 14:25:15</li>
                                <li className="list">订单状态：已完成</li>
                                <li className="list">订单金额：&yen;1619.00</li>
                                <li className="list">订单类型：普通</li>
                            </ul>
                        }
                            <a href="javascript:;" className="link">查看详情&gt;&gt;</a>
                        </div>
                        <div className="order-detail">
                            <p className="title">
                                <span className="left"></span>
                                <span className="center">
                                    <a className="btn" href="javascript:;"><i className="icon"></i>创建工单</a>
                                    <a className="btn" href="javascript:;"><i className="icon"></i>发送安装短信</a>
                                </span>
                                <span className="right"></span>
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>2017-10-24</td>
                                        <td>3645784545452</td>
                                        <td>格力空调GGG</td>
                                        <td>383747373</td>
                                        <td className="last">已完成</td>
                                    </tr>
                                    <tr>
                                        <td>2017-10-24</td>
                                        <td>3645784545452</td>
                                        <td>格力空调GGG</td>
                                        <td>383747373</td>
                                        <td className="last">已完成</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QueryOrder;