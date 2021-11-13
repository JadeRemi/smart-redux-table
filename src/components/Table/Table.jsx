import React, {Component} from 'react';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import s from './Table.module.css';

class Table extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        const sortMethods = {
            sortByName(a, b) {return a.name > b.name ? 1 : -1},
            sortBySites(a, b) {return a.sites - b.sites},
            sortByType(a, b) {return a.type > b.type ? 1 : -1},
            sortByStatus(a, b) {return a.status > b.status ? 1 : -1}
        }
        let localData = this.props.data;
        if (this.props.searchQuery) {
            localData = this.props.data.filter(item => {
                return item.name.toLowerCase().includes(this.props.searchQuery) || item.type.includes(this.props.searchQuery)
            })
        }
        if (this.props.data && localData.length === 0) {
            return <p>By query <span className={s.searchQuery}>"{this.props.searchQuery}"</span> no matches found!</p>
        }
        if (this.props.sortMethod) {
            localData.sort(sortMethods[this.props.sortMethod])
        }
        if (this.props.reverseToggler) {
            localData.reverse()
        }

        const rows = localData.map(d => <TableRow key={d.id}
                                                  name={d.name}
                                                  sitesCount={d.sites}
                                                  type={d.type}
                                                  status={d.status}/>
        );
        return (
            <table className={s.table}>
                <tbody>
                <TableHead sortTable={this.props.sortTable} searchQuery={this.props.searchQuery}/>
                {rows}
                </tbody>
            </table>
        )
    }
}

export default Table;
