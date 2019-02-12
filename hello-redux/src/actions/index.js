import { INCREMENT,DECREMENT,FETCH_USER_SUCCESS,FETCH_USER_REQUEST,FETCH_USER_FAIL,LOAD_USER} from '../constants'
import axios from 'axios'

export const increment = () => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch({
                type: INCREMENT
            })
        },50)
    }
    // return {
    //     type: INCREMENT
    // }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const getUser = () => {
    // return dispatch => {
    //     dispatch(fetch_user_request())
    //     axios.get("https://randomuser.me/api/")
    //     .then(res => {
    //         dispatch(fetch_user(res.data.results[0]))
    //     })
    //     .catch(error=>{
    //         dispatch(fetch_user_fail(error.response.data))
    //     })
    // }
    return {
        type: LOAD_USER,
        payload: axios.get("https://randomuser.me/api")
    }
}

export const fetch_user = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

export const fetch_user_fail = (error) => {
    return {
        type: FETCH_USER_FAIL,
        error
    }
}

export const fetch_user_request = () =>{
    return{
        type: FETCH_USER_REQUEST,
        isFetching: true
    }
}