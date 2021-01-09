import React from "react";
import '../css/SearchBlock.css';

const SearchBlock = (props) => {
    return (
        <div className={'search__block' + ' ' + props.state.className}>
            <input className="search__input" placeholder={props.state.placeholder}/>
            <span className="icon-search"></span>
        </div>
    )
}

export default SearchBlock;