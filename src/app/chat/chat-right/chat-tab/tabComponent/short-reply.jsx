import React from 'react';
import classNames from 'classnames';
import '../chat-tab.scss';

class ShortReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shortReplyItems: [
                {
                    title: '开场白',
                    active: true,
                    item: [{name: '请问怎么开电子发票？'}, {name: '亲，请问有什么可以帮助您等[玫瑰]'}]
                },
                {
                    title: '结束语',
                    active: false,
                    item: [{name: '请问怎么开电子发票？'}, {name: '亲，请问有什么可以帮助您等[玫瑰]'}]
                },
                {
                    title: '常用地址链接',
                    active: false,
                    item: [{name: '请问怎么开电子发票？'}, {name: '亲，请问有什么可以帮助您等[玫瑰]'}]
                },
            ]
        }
    }

    render() {
        const {shortReplyItems} = this.state;
        return (
            <div className={`chat-inner-content chat-inner-short-reply ${this.props.className}`}>
                <div className="short-reply-search">
                    <span className="text">搜索</span>
                    <input className="ipt" placeholder="搜索快捷回复" type="text"/>
                    <a className="btn" href="javascript:;">搜索</a>
                </div>
                <div className="short-reply-items">
                    {
                        shortReplyItems.map((item, idx)=> {
                            return(
                                <dl key={`short-reply-items-${idx}`} className={classNames("short-reply-item", {active: item.active})}>
                                    <dt><span onClick={()=>{item.active = !item.active; this.setState({shortReplyItems})}}>{item.title}</span></dt>
                                    {
                                        item.item.map((innerItem, innerIdx)=> {
                                            return(
                                                <dd key={`short-reply-inner-items-${innerIdx}`}><span>{innerItem.name}</span></dd>
                                            )
                                        })
                                    }
                                </dl>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ShortReply;