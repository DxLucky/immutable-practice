import React from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import {connect} from "react-redux";

@connect(
    state=>({
        $dialogue:state.getIn(["$chatInfo","$chatCurrent","$dialogue"])
    }),
    null
)

@immutableRenderDecorator
class ChatCenterBody extends React.Component{
    static propTypes = {
        $dialogue:ImmutablePropTypes.map,
    };
    constructor(props){
        super(props)
    }
    render(){
        let {$dialogue}=this.props;
        return(
            <ul className="chatCenterBody">
                {
                    $dialogue.get("dialogue").map((item,i)=>{
                        return (
                            item.get("mark")===0 ?
                                <li className="dialogue chartCustomer" key={i}>
                                    <header>
                                        <span>{item.get("userName")}</span>
                                        <span>({item.get("time")})</span>
                                    </header>
                                    <section>
                                        {item.get("content")}
                                    </section>
                                </li>
                                :
                                <li className="dialogue chartService" key={i}>
                                    <header>
                                        <span>{item.get("userName")}</span>
                                        <span>({item.get("time")})</span>
                                    </header>
                                    <section>
                                        {item.get("content")}
                                    </section>
                                </li>
                        )
                    })
                }
                <li className="chartComment">
                    亲，对我们的服务进行<span>评价</span>吧！
                </li>
            </ul>
        )
    }
}

export default ChatCenterBody