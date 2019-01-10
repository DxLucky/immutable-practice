import React from 'react';
import classNames from "classnames";

import './select.scss';

class Select extends React.Component {
    constructor(props) {
        super(props);
        const list = props.list || [], listItem = (props.list || [])[0] || {};        
        let selectName = listItem.name, defaultVal = listItem.val;

        if(props.defaultVal) {
            defaultVal = props.defaultVal;
            list.map(item=>{
                if(defaultVal == item.val) {
                    selectName = item.name;
                }
            });
        }
        this.state = {
            toggle: false,
            selectVal: defaultVal,
            selectName: selectName,
        }
        this.toggleSelect = this.toggleSelect.bind(this);
        this.selected     = this.selected.bind(this);
        this.closeSelect  = this.closeSelect.bind(this);
        this.props.selected && this.props.selected(defaultVal, listItem)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.selectVal !== this.state.selectVal;
    }

    toggleSelect(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const {toggle} = this.state;
        this.setState({
            toggle: !toggle
        })
    }
    componentWillUnmount() {
        if(document.removeEventListener) {
            document.removeEventListener('click', this.closeSelect)
        }else if(document.detachEvent) {
            document.detachEvent('onclick', this.closeSelect);
        }
    }
    closeSelect() {
        this.setState({
            toggle: false
        })
    }
    componentDidMount() {
        if(document.addEventListener) {
            document.addEventListener('click', this.closeSelect, false);
        }else if(document.attachEvent) {
            document.attachEvent('onclick', this.closeSelect);
        }
    }
    selected(selected, selectedItem) {
        const propsCallback = this.props.selected;
        this.setState({
            selectVal: selected,
            selectName: selectedItem.name
        })
        propsCallback && propsCallback(selected, selectedItem);
    }

    render() {
        const {toggle, selectVal, selectName} = this.state, {list=[], name, className} = this.props;
        return (
            <div ref={`${name}Wrap`} className={classNames("custom-select", className, {focus: toggle})} onClick={(e)=>this.toggleSelect(e)}>
                <span className="custom-select-text"><i>{selectName}</i></span>
                <ul ref={name} className="custom-select-items">
                    {
                        list.map((item, idx)=> {
                            return (
                                <li onClick={()=>this.selected(item.val, item)} className={classNames('custom-select-item', {selected: item.val == selectVal})} key={`${name}-${idx}`}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Select;