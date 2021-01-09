import React from "react";
import '../css/Sidebar.css';
import MenuItem from "./MenuItem";

const Sidebar = (props) => {

    let menuItemsComponentsArr = props.sidebar.menuItems.map(menuLink => <MenuItem id={menuLink.id} path={menuLink.path} iconName={menuLink.iconName} itemName={menuLink.itemName}/>)

    return (
        <aside className="sidebar">
            {menuItemsComponentsArr}
        </aside>
    )
}

export default Sidebar;