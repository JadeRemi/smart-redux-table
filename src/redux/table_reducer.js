import {requestData} from "../api/api";

const FILTER_TABLE = 'FILTER_TABLE';
const SORT_TABLE = 'SORT_TABLE';
const SET_DATA = 'SET_DATA';

const initialState = {
    data: [],
    sortMethod: null,
    reverseToggler: false,
    searchQuery: ''
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_TABLE: {
            return {...state, searchQuery: action.query};
        }

        case SORT_TABLE: {
            let toggler = state.reverseToggler;
            let method = null;
            switch (action.columnName) {
                case 'Tool name': {
                    method = 'sortByName';
                    break;
                }
                case 'Used on': {
                    method = 'sortBySites';
                    break;
                }
                case 'Type': {
                    method = 'sortByType';
                    break;
                }
                case 'Status': {
                    method = 'sortByStatus';
                    break;
                }
            }
            if (method === state.sortMethod) {
                toggler = !toggler;
            } else {
                toggler = null;
            }
            return {
                ...state, sortMethod: method, reverseToggler: toggler
            }
        }

        case SET_DATA: {
            return {
                ...state, data: action.data
            }
        }
        default:
            return state;
    }
}

export const filterTable = (query) => ({type: FILTER_TABLE, query});

export const sortTable = (columnName) => ({type: SORT_TABLE, columnName});

export const setData = (data) => ({type: SET_DATA, data});

export const getData = () => async (dispatch) => {
    let data = await requestData();
    dispatch(setData(data));
}

export default tableReducer;