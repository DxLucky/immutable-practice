import React from 'react';
import Select from '../../../../../components/select/select.jsx';
import '../chat-tab.scss';

class QueryWorkOrder extends React.Component {
    constructor(props) {
        super(props);
        this.selected = this.selected.bind(this);
    }
    selected() {

    }
    render() {
        const list = [{name: '配送单',val: '1'}, {name: '工单号', val: '2'}, {name: '订单号', val: '3'}];
        return (
            <div className={`chat-inner-content chat-inner-query-content chat-inner-work-content ${this.props.className}`}>
                <div className="short-reply-search">
                    <div className="text">
                        <Select list={list} className="search-type" selected={this.selected} name="search-type" />
                    </div>
                    <input className="ipt" placeholder="" type="text"/>
                    <a className="btn" href="javascript:;">搜索</a>
                </div>
                <div className="order-tab-content">
                    <table>
                        <thead>
                            <tr>
                                <th width="22%">工单单号</th>
                                <th width="22%">订单号</th>
                                <th width="22%">状态</th>
                                <th>创建时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="javascript:;" className="link">020206</a></td>
                                <td>3645784545452</td>
                                <td>处理中</td>
                                <td>12-11</td>
                            </tr>
                            <tr>
                                <td><a href="javascript:;" className="link">020206</a></td>
                                <td>3645784545452</td>
                                <td>处理中</td>
                                <td>12-11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="item">
                    <h6 className="title work-order-detail">工单详情</h6>
                    <ul className="lists">
                        <li className="list">工单单号：<a className="name" href="javascript:;">020206</a></li>
                        <li className="list">订单号：34548787845</li>
                        <li className="list">工单状态：处理完成</li>
                        <li className="list">创建时间：2018年4月13日 14:46:48</li>
                        <li className="list">接单部门：安徽万达</li>
                        <li className="list">问题类型：购物申请</li>
                        <li className="list">工单备注：此顾客购买过</li>                        
                    </ul>
                </div>
                <div className="item">
                    <h6 className="title add-work">创建工单</h6>
                    <div className="work-order-form">
                        <div className="left">
                            <div className="row">
                                <span className="key">工单单号:</span>
                                <div className="val"><input type="text"/></div>
                            </div>
                            <div className="row">
                                <span className="key">开始时间:</span>
                                <div className="val"><input type="text"/><i className="date"></i></div>
                            </div>
                            <div className="row">
                                <span className="key">创建组:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="createGroup" /></div>
                            </div>
                            <div className="row bills-type">
                                <span className="key">单据类型:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="billsType" /></div>
                            </div>
                            <div className="row">
                                <span className="key">运动节点:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="sportNode" /></div>
                            </div>
                            <div className="row">
                                <span className="key">工单级别:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="wordOrderLevel" /></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="row">
                                <span className="key">客户电话:</span>
                                <div className="val"><input type="text"/></div>
                            </div>
                            <div className="row">
                                <span className="key">结束时间:</span>
                                <div className="val"><input type="text"/><i className="date"></i></div>
                            </div>
                            <div className="row">
                                <span className="key">创建人:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="creator" /></div>
                            </div>
                            <div className="row">
                                <span className="key">诉求类型:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="appealType" /></div>
                            </div>
                            <div className="row">
                                <span className="key">来源数据:</span>
                                <div className="val"><Select className="select" list={[{name:'请选择', val: ''}]} selected={this.selected} name="sourceData" /></div>
                            </div>
                        </div>
                    </div>
                    <a className="add-remaker" href="javascript:;">添加</a>
                </div>
            </div>
        )
    }
}

export default QueryWorkOrder;