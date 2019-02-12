import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAIL, LOAD_USER_FULFILLED, LOAD_USER_REJECTED,LOAD_USER_PENDING } from "../constants/index"

const initialState = {
    isFetching: false,
    error: null,
    user: {}
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                isFetching: false,
                error: null,
                user: action.user
            }

        case FETCH_USER_REQUEST:
            return {
                isFetching: action.isFetching,
                error: null,
                user: {}
            }

        case FETCH_USER_FAIL:
            return {
                isFetching: false,
                error: action.error,
                user: {}
            }

        case LOAD_USER_FULFILLED:
            return {
                isFetching: false,
                error: null,
                user: action.payload.data.results[0]
            }

        case LOAD_USER_REJECTED:
            return {
                isFetching: false,
                error: action.payload.response.data,
                user: {}
            }

        case LOAD_USER_PENDING:
            return {
                isFetching: true,
                error: null,
                user: {}
            }
        default:
            return state
    }
}

export default user;