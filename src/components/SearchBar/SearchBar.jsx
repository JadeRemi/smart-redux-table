import React from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({filterTable}) => {
    const inputElement = React.createRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const query = inputElement.current.value.toLowerCase();
        filterTable(query);
    };
    return (
        <form className={s.searchForm} method="get">
            <input className={s.searchInput} name="search" placeholder="Search here..." type="search" autoComplete="off"
                   ref={inputElement} onChange={submitHandler}/>
            <button className={s.btn} type="submit" onClick={submitHandler}></button>
        </form>
    )
}

export default SearchBar;