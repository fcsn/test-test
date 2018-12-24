import { handleActions } from 'redux-actions';

import * as api from 'lib/api';

const GET_RANKINGS_LOADING = 'ranking/GET_RANKINGS_LOADING';
const GET_RANKINGS_SUCCESS = 'ranking/GET_RANKINGS_SUCCESS';
const GET_RANKINGS_FAILURE = 'ranking/GET_RANKINGS_FAILURE';

const getRankingsLoading = () => ({type: GET_RANKINGS_LOADING})
const getRankingsSuccess = ranking => ({type: GET_RANKINGS_SUCCESS, payload: ranking})
const getRankingsFailure = () => ({type: GET_RANKINGS_FAILURE})

export const getRankings = () => (
    (dispatch, getState) => {
        dispatch(getRankingsLoading())
        return api.getRankings()
            .then(res => {
                dispatch(getRankingsSuccess(res))
            })
            .catch(err => {
                dispatch(getRankingsFailure())
            })
    }
)

const initialState = {
    pending: false,
    error: false,
    rankings: []
}

export default handleActions({
    [GET_RANKINGS_LOADING]: (state, action) => {
        return {
            ...state,
            pending: true
        }
    },
    [GET_RANKINGS_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            rankings: action.payload.data
        }
    },
    [GET_RANKINGS_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);