import React,{Component} from 'react';

import './item.css';

class Item extends Component {

    state = {
        important:false
    }
    setImportant = () => {
        this.setState(({important})=> {
            return {important: !important}
        })
    }
    
    render() {
        const {label,checked,delateItem,onCheck} = this.props
        let className = '';
        let className2 = '';
        if (checked) {
            className = 'checked';
        }
        if (this.state.important) {
            className2 = 'important';
        }
        return (
            <li  className = {className}>
                <span className = {className2} onClick ={onCheck}>{label}</span>
                <span className='delete' onClick={delateItem}><i className="fa fa-trash"/></span>
                <span className='imp-icon' onClick={this.setImportant}>I</span>
            </li>
        )
    }
    
}

export default Item;