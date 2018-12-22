import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

import * as api from 'lib/api';

const GET_GOODS_LOADING = 'goods/GET_GOODS_LOADING';
const GET_GOODS_SUCCESS = 'goods/GET_GOODS_SUCCESS';
const GET_GOODS_FAILURE = 'goods/GET_GOODS_FAILURE';

const getGoodsLoading = () => ({type: GET_GOODS_LOADING})
const getGoodsSuccess = goods => ({type: GET_GOODS_SUCCESS, payload: goods})
const getGoodsFailure = () => ({type: GET_GOODS_FAILURE})

export const getGoods = () => (
    (dispatch, getState) => {
        dispatch(getGoodsLoading())
        return api.getProducts()
        .then(res => {
            dispatch(getGoodsSuccess(res))
        })
        .catch(err => {
            dispatch(getGoodsFailure())
        })
    }
)

// const initialState = Map({
//     goods: List()
// });

const initialState = {
    pending: false,
    error: false,
    goods: []
}

export default handleActions({
    [GET_GOODS_LOADING]: (state, action) => {
        return {
            ...state,
            pending: true
        }
    },
    [GET_GOODS_SUCCESS]: (state, action) => ({
        ...state,
        pending: false,
        goods: action.payload.data
    }),
    [GET_GOODS_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState)