import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import "./dialog.scss";
class DialogNew extends React.Component {
    static propTypes = {
        title:PropTypes.string,//弹框标题
        width: PropTypes.string,//弹框宽度
        onConfirm:PropTypes.func,//弹框确认函数
        hasFooter:PropTypes.bool,//弹框是否需要footer
        onClose:PropTypes.func//弹框关闭函数
    };
    static defaultProps ={
        width:"400px",
        title:null,
        hasFooter:true
    };
    constructor(props) {
        super(props);
        this.node = document.createElement("div");
        this.node.className="modal";
        document.body.appendChild(this.node);
    }
    componentWillUnmount(){
        document.body.removeChild(this.node);
    }
    render(){
        let {width,title,onConfirm,onClose,hasFooter} = this.props;
        return createPortal(
            <div className="modalArea" style={{width:width}}>
                <header>
                    <p>{title}</p>
                    <p className="cancleSign" onClick={onClose}/>
                </header>
                <section>
                    {this.props.children}
                </section>
                {
                    hasFooter?
                        <footer>
                            <button className="btn-confirm" onClick={onConfirm}>确定</button>
                            <button className="btn-cancel" onClick={onClose}>取消</button>
                        </footer>:null
                }
            </div>,
            this.node
        );
    }
}
export default DialogNew;