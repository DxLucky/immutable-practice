import React from "react";
import ChatLeft from './chat-left/chat-left.jsx';
import ChatRight from './chat-right/chat-right.jsx';


class PageOne extends React.Component{
    render(){
        return(
            <div className="layout-body">
                <ChatLeft />
                <ChatRight />
            </div>
        )
    }
}

export default PageOne;