import React from "react";

import Item from "../item/item";
import './item-container.css';

const ItemContainer = ({data,onCheck,delateItem}) => {
    return (
    <ul id ="myUL">
        {data.map((item)=>{
            return (
                <Item delateItem={delateItem(item.id)} onCheck = {onCheck(item.id)} key={item.id}
                      label={item.label} checked = {item.checked}/>
            )
        })}
    
    </ul>
    )
}

export default ItemContainer;