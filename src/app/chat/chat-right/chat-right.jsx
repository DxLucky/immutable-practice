import React from 'react';
import ChatMain from './chat-main/chat-main.jsx';
import ChatTab from './chat-tab/chat-tab.jsx';

import './chat-right.scss';

class ChatRight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="chat-right">
                <div className="chat-right-content">
                    <ChatMain />
                    <ChatTab />
                </div>
            </div>
        )
    }
}

export default ChatRight;