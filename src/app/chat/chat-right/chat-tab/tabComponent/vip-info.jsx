import React from 'react';
import classNames from 'classnames';
import Select from '../../../../../components/select/select.jsx';
import '../chat-tab.scss';

class VipInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            problemType: '',
            record: {
                type: '',
                description: ''
            }
        };
        this.selected = this.selected.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    selected(val, item) {
        const {record} = this.state;
        record.type = val;
        this.setState({
            record
        })
    }

    toggleEdit() {
        const {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    changeHandler(e) {
        const target = e.target, name = target.name, val = target.value, {record} = this.state;
        record.description = val;
        this.setState({
            record
        })
    }
    render() {
        const {isEdit, record: {type, description}} = this.state;
        const list = [{name: '订单问题',val: '1'}, {name: '售后问题', val: '2'}, {name: '商品问题', val: '3'}, {name: '会员问题', val: '4'}, {name: '配送问题', val: '5'}];
        return (
            <div className={`chat-tab-vip-inner-content ${this.props.className}`}>
                <div className="item">
                    <h6 className="title vip">会员基础信息</h6>
                    <ul className="lists">
                        <li className="list">用户名：<a className="name" href="javascript:;">nikola125</a></li>
                        <li className="list">手机号：15045784459</li>
                        <li className="list">会员卡：15045784459</li>
                        <li className="list">客户姓名：李雪</li>
                        <li className="list">美豆余额：3202  <a className="link" href="javascript:;">查看明细 &gt;&gt;</a></li>
                    </ul>
                </div>
                <div className="item">
                    <h6 className="title">当前咨询订单 (订单入口进展详情)</h6>
                    <ul className="lists">
                        <li className="list">下单时间：2018-4-12 13:53:39</li>
                        <li className="list">订单号：34548787845</li>
                        <li className="list">订单渠道：北京国美望京店</li>
                        <li className="list">配送单号：9854578</li>
                        <li className="list">安装单号：5487856988</li>
                        <li className="list">订单状态：配送中</li>
                        <li className="list">订单金额：&yen;1619.00</li>
                        <li className="list">订单类型：普通</li>
                        <li className="list">订单商品：席梦思商品高级床垫1.8米</li>
                        <li className="list">收货人：江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号</li>
                    </ul>
                    <a href="javascript:;" className="create-work-order">将此订单创建工单</a>
                </div>
                <div className="item">
                    <h6 className="title recode">上次咨询记录</h6>
                    {
                        isEdit
                        ?
                        <ul className="lists edit-recode">
                            <li className="list">
                                问题类型：<Select selected={this.selected} defaultVal={type} list={list} name="advisory" />
                            </li>
                            <li className="list">
                                问题描述：<textarea name="description" onChange={this.changeHandler} value={description}></textarea>
                            </li>
                        </ul>
                        :
                        <ul className="lists">
                            <li className="list">服务时长：3分10秒</li>
                            <li className="list">咨询方式：线下电话咨询</li>
                            <li className="list">咨询类型：申请退货</li>
                            <li className="list">上次备注：此顾客购买过，40岁</li>
                            <li className="list">本次备注：电脑发烧友</li>
                        </ul>
                    }
                    <a className={classNames("add-remaker", {goback: isEdit})} onClick={this.toggleEdit} href="javascript:;">{isEdit ? '返回' : '新增'}</a>
                </div>
            </div>
        )
    }
}

export default VipInfo;