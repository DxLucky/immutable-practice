import React from "react";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import {connect} from "react-redux";
import "./memberMsg.scss";

@connect(
    state=>({
        $selectedList:state.getIn(["$chatInfo","$chatCurrent","$selectedList"])
    }),
    null
)

@immutableRenderDecorator
class MemberMsg extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("进来")
        return(
            <ul className="memberMsg">
                <li>
                    <header>
                        <i className="iconfont icon-huiyuan"/>
                        <span>会员基础信息</span>
                    </header>
                    <ul>
                        <li>用户名：<span>nikaoggga</span></li>
                        <li>手机号：15058685421</li>
                        <li>会员卡：00000015058685421</li>
                        <li>美豆余额：3300
                            <span className="turnDetail">
                                查看明细
                                <i className="iconfont icon-shuangjiantouyou"/>
                            </span>
                        </li>
                    </ul>
                </li>
                <li>
                    <header>
                        <i className="iconfont icon-zaixianzixun"/>
                        <span>当前咨询订单信息</span>
                    </header>
                    <ul>
                        <li>下单时间：2017-10-24 18:30:21</li>
                        <li>订单号：3456124550085112</li>
                        <li>订单渠道：北京国美望京店</li>
                        <li>配送单号：15058685421</li>
                        <li>安装单号：939224545711</li>
                        <li>订单状态：配送中</li>
                        <li>订单金额：¥1619.00</li>
                        <li>订单类型：普通</li>
                        <li>订单商品：席梦思高级棕榈床垫1.8米</li>
                        <li>收货人：李浩</li>
                        <li>收货人地址：江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号江苏省南京市虎牙路45号</li>
                        <li className="btnCreate">
                            <i className="iconfont icon-order"/>
                            <span>将此订单创建工单</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <header>
                        <i className="iconfont icon-lishijilu-copy"/>
                        <span>上次咨询记录</span>
                    </header>
                    <ul>
                        <li>服务时长：3分10秒</li>
                        <li>咨询方式：线下电话咨询</li>
                        <li>咨询类型：申请退货</li>
                        <li>上次备注：此顾客购买过，40多岁</li>
                        <li>本次备注：电脑发烧友</li>
                        <li className="btnAdd">
                            <i className="iconfont icon--jiahao"/>
                            <span>新增</span>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default MemberMsg