import React from "react";
import {NavLink} from "react-router-dom";
import '../css/MenuItem.css';


const MenuItem = (props) => {

    return (
        <NavLink className={'menu__link'} to={'/' + props.path} id={props.id}>
            <span className={'icon-' + props.iconName + ' ' + 'link__icon'}>
            </span>
            <span className="item__name">
                {props.itemName}
            </span>
        </NavLink>
    )
}

export default MenuItem;