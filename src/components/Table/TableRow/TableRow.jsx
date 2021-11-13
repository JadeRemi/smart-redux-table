import React from 'react';
import s from './TableRow.module.css';

const On = () => <span className={s.on}>on</span>
const Off = () => <span className={s.off}>off</span>

const TableRow = (props) => {
  return (
    <tr className={s.tableRow}>
      <td>{props.name}</td>
      <td>{props.sitesCount}</td>
      <td>{props.type}</td>
      <td>{props.status === 'blocked' ? <i className="fa fa-lock" aria-hidden="true"></i>
      : props.status === 'enable' ? <On /> : <Off />}</td>
    </tr>
  )
}
export default TableRow;