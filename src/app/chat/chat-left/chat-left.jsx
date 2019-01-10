import React from 'react';

import Member from './leftComponent/member.jsx';
import Colleague from './leftComponent/colleague.jsx';

class ChatLeft extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            conversation: true,            
        }
        this.switchConversation = this.switchConversation.bind(this);        
    }
    switchConversation(type) {
        this.setState({
            conversation: type == 'cur'
        })
    }
    render() {
        const {conversation} = this.state;
        return (
            <div className="member-list">
                <p className="search-wrap"><input placeholder="搜索" type="text" className="search"/></p>
                <div className="member-type">
                    <p className="member-type-item" onClick={()=>this.switchConversation('cur')}>
                        <a className={`cur${conversation ? ' active' : ''}`} href="javascript:;"><i className="chat-bubble">8</i>当前会话</a>
                    </p>
                    <p className="member-type-item" onClick={()=>this.switchConversation('colleague')}>                        
                        <a className={`colleague${conversation ? '' : ' active'}`} href="javascript:;"><i className="chat-bubble">8</i>同事对话</a>
                    </p>
                </div>
                <Member />
            </div>
        )
    }
}

export default ChatLeft;