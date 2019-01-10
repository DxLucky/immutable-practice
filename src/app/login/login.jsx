import React from "react";
import classnames from "classnames";
import {fromJS} from "immutable";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import Checkbox from "../../components/checkbox/checkbox.jsx";
import Api from "../../api/api.jsx";
import Util from "../../components/util/util.jsx";
import Cookie from "../../components/cookie/cookie.jsx";
import "./login.scss";

@immutableRenderDecorator
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            $state:fromJS({
                userName:window.atob?window.atob(Cookie.getCookie("user")):Cookie.getCookie("user") || null,
                uesPwd:window.atob?window.atob(Cookie.getCookie("pwd")):(Cookie.getCookie("pwd")) || null,
                userNameFocus:false,
                uesPwdFocus:false,
                userNameTips:false,
                uesPwdTips:false,
                isRemberPed:true,//默认记住密码
                loading:false
            })
        };
        this.onCheckedChange=this.onCheckedChange.bind(this);
        this.goLogin=this.goLogin.bind(this);
        this.rememberPwd=this.rememberPwd.bind(this);
        this.deleteCookie=this.deleteCookie.bind(this);
    }
    componentWillMount(){
        document.addEventListener('keyup',(e)=>{
            if(e.keyCode===13){
                this.goLogin()
            }
        });
    }
    onCheckedChange(ischecked){
        this.setState(({$state})=>({
            $state:$state.update("isRemberPed",()=>ischecked)
        }))
    }
    rememberPwd(){
        let{$state}=this.state;
        Cookie.setCookie("user",window.btoa?window.btoa($state.get("userName")):$state.get("userName"),7);
        Cookie.setCookie("pwd",window.btoa?window.btoa($state.get("uesPwd")):$state.get("uesPwd"),7);
    }
    deleteCookie(){
        Cookie.removeCookie("user");
        Cookie.removeCookie("pwd");
    }
    goLogin(){
        let {uesPwd,userName,isRemberPed}=this.state;
        let {$state}=this.state;
        if(!$state.get("uesPwd") && !$state.get("userName")){
            this.setState(({$state})=>({
                $state:$state.update("userNameTips",()=>true)
                             .update("uesPwdTips",()=>true)
            }));
            return;
        }
        if(!$state.get("userName")){
            this.setState(({$state})=>({
                $state:$state.update("userNameTips",()=>true)
            }));
            return;
        }
        if(!$state.get("uesPwd")){
            this.setState(({$state})=>({
                $state:$state.update("uesPwdTips",()=>true)
            }));
            return;
        }
        this.setState(({$state})=>({
            $state:$state.update("loading",()=>true)
        }));
        Util.fetchHandler({
            url:Api.login,
            body:{
                username: $state.get("userName"),
                password: $state.get("uesPwd")
            },
            type:"get"
        }).then((resdata)=>{
            isRemberPed ? this.rememberPwd() : this.deleteCookie();//记住密码操作
            sessionStorage.setItem("userInfo",JSON.stringify(resdata));//用于登录与否的路由判断
            this.props.history.push("/");
        }).catch(()=>{
            this.setState(({$state})=>({
                $state:$state.update("loading",()=>false)
            }));
        })
    }
    render(){
        let {$state}=this.state;
        return(
            <div id="loginBox">
                <div className="loginHeader">
                    <img src={require("../../asset/images/logo.png")}/>
                </div>
                <div className="loginItem">
                    <div>
                        <p>账号密码登录</p>
                        <div className={classnames("userInput inputArea",{warnTips:$state.get("userNameTips"),inputFocus:$state.get("userNameFocus")})}>
                            <img src={require("../../asset/images/loginUser.png")}/>
                            <input placeholder="登录账号"
                                   value={$state.get("userName")}
                                   onChange={(e)=>{
                                       let v=e.target.value;
                                       this.setState(({$state})=>({
                                           $state:$state.update("userName",()=>v)
                                       }))
                                   }}
                                   onFocus={()=>{
                                       this.setState(({$state})=>({
                                           $state:$state.update("userNameFocus",()=>true).update("userNameTips",()=>false)
                                       }))
                                   }}
                                   onBlur={()=>{
                                       this.setState(({$state})=>({
                                           $state:$state.update("userNameFocus",()=>false)
                                       }))
                                   }}
                            />
                            {
                                $state.get("userNameTips") ?
                                    <p>
                                        <img src={require("../../asset/images/warning.png")}/>
                                        <span>请输入账号</span>
                                    </p>:null
                            }
                        </div>
                        <div className={classnames("pwdInput inputArea",{warnTips:$state.get("uesPwdTips"),inputFocus:$state.get("uesPwdFocus")})}>
                            <img src={require("../../asset/images/loginPwd.png")}/>
                            <input placeholder="登录密码" type="password"
                                   value={$state.get("uesPwd")}
                                   onChange={(e)=>{
                                       let v=e.target.value;
                                       this.setState(({$state})=>({
                                           $state:$state.update("uesPwd",()=>v)
                                       }))
                                   }}
                                   onFocus={()=>{
                                       this.setState(({$state})=>({
                                           $state:$state.update("uesPwdFocus",()=>true).update("uesPwdTips",()=>false)
                                       }))
                                   }}
                                   onBlur={
                                       ()=>{
                                           this.setState(({$state})=>({
                                               $state:$state.update("uesPwdFocus",()=>false)
                                           }))
                                       }
                                   }
                            />
                            {
                                $state.get("uesPwdTips") ?
                                    <p>
                                        <img src={require("../../asset/images/warning.png")}/>
                                        <span>请输入密码</span>
                                    </p>:null
                            }
                        </div>
                        <Checkbox defaultChecked={$state.get("isRemberPed")} labelText="记住密码" onCheckedChange={this.onCheckedChange}/>
                        <div className="buttonArea" onClick={this.goLogin}>
                            {
                                $state.get("loading") ?
                                    <div>
                                        <img src={require("../../asset/images/loginLoading.svg")}/>
                                        <span>登录中</span>
                                    </div>
                                    :
                                    <div>
                                        <span>登录</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

