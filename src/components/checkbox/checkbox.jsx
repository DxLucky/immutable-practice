import React from "react";
import {Map} from "immutable";
import PropTypes from "prop-types";
import {immutableRenderDecorator} from "react-immutable-render-mixin";
import classNames from "classnames";
import "./checkbox.scss";

@immutableRenderDecorator
class Checkbox extends React.Component{
    static propTypes = {
        defaultChecked:PropTypes.bool,
        labelText:PropTypes.string,
        className:PropTypes.string,
        onCheckedChange:PropTypes.func,
    };
    constructor(props){
        super(props);
        this.state={
            $checkBox:Map({
                isChecked:props.defaultChecked
            })
        };
        this.checkedChange=this.checkedChange.bind(this);
    }
    checkedChange(){
        let {onCheckedChange}=this.props;
        this.setState(({$checkBox})=>({
            $checkBox:$checkBox.update("isChecked",()=>!this.state.$checkBox.get("isChecked"))
        }));
        onCheckedChange && onCheckedChange(!this.state.$checkBox.get("isChecked"))
    }
    render(){
        let {$checkBox}=this.state,
            {labelText,className}=this.props;
        return(
            <div onClick={this.checkedChange} className={classNames("checkBox",className)}>
                <span className={classNames({Checked:$checkBox.get("isChecked")})}/>
                <span>{labelText}</span>
            </div>
        )
    }
}
export default Checkbox



