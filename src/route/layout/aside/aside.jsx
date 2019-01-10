import React from "react";
import {NavLink} from "react-router-dom";
import "./aside.scss";

class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {menuList,jobNum}=JSON.parse(sessionStorage.getItem("userInfo"));
        return(
            <ul id="asideNav">
                <li>
                    <div className="headPortrait">
                        <img src={require("../../../asset/images/icon_brtx.png")}/>
                        <i className="iconfont icon-yuandianzhong"/>
                    </div>
                    <p>工号{jobNum}</p>
                </li>
                {
                    menuList.map((item,i)=>{
                        return(
                            <li key={i}>
                                <NavLink to={`/${item.url}`} activeClassName="navActive">
                                    <i className={`navIcon nav-${item.url}`}>
                                        {
                                            item.icon==="chat" && item.num!==0 && <b>{item.num}</b>
                                        }
                                    </i>
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Aside


