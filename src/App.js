import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Table from './components/Table/Table';
import {filterTable, sortTable, getData} from './redux/table_reducer';

function App(props) {
    return (
        <div className="appWrapper">
            <SearchBar filterTable={props.filterTable}/>
            <Table data={props.data}
                   sortMethod={props.sortMethod}
                   reverseToggler={props.reverseToggler}
                   searchQuery={props.searchQuery}
                   sortTable={props.sortTable}
                   toggleModal={props.toggleModal}
                   getData={props.getData}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.table.data,
        sortMethod: state.table.sortMethod,
        reverseToggler: state.table.reverseToggler,
        searchQuery: state.table.searchQuery,
    }
}

let AppContainer = connect(mapStateToProps, {filterTable, sortTable, getData})(App);
export default AppContainer;
