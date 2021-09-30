import { createStore } from 'redux';

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_SHOWING_USERS = 'GET_SHOWING_USERS';
const CHECK_USER = 'CHECK_USER';
const SEARCH_INPUT = 'SEARCH_INPUT';
const SHOW_PAGE = 'SHOW_PAGE';

let initialState = {
    allUsers: [],
    showingUsers: [],
    chekedUser: '',
    searchInput: '',
    page: 0
};

const userReduser = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS: {
            return {
                ...state,
                allUsers: action.body
            };
        }

        case GET_SHOWING_USERS: {
            return {
                ...state,
                showingUsers: action.body
            };
        }

        case CHECK_USER: {
            return {
                ...state,
                chekedUser: action.body
            };
        }

        case SEARCH_INPUT: {
            return {
                ...state,
                searchInput: action.body
            };
        }

        case SHOW_PAGE: {
            return {
                ...state,
                page: action.body
            };
        }

        default:
            return state;
    }
}

export const getAllUsersAC = (body) => ({
    type: GET_ALL_USERS,
    body: body
});

export const getShowingUsersAC = (body) => ({
    type: GET_SHOWING_USERS,
    body: body
});

export const checkUserAC = (body) => ({
    type: CHECK_USER,
    body: body
});

export const searchInputAC = (body) => ({
    type: SEARCH_INPUT,
    body: body
});

export const showPageAC = (body) => ({
    type: SHOW_PAGE,
    body: body
});

const store = createStore(userReduser);

export default store;
