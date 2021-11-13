import React from 'react';
import s from './TableHead.module.css';

const TableHead = (props) => {
    const clickHandler = (e) => {if (e.target.tagName === 'SPAN') {props.sortTable(e.target.textContent)}};
    return (
        <tr className={s.tableHead} onClick={clickHandler}>
            <th><span className={s.name}>Tool name</span></th>
            <th><span>Used on</span></th>
            <th><span>Type</span></th>
            <th><span>Status</span></th>
        </tr>
    )
}

export default TableHead;