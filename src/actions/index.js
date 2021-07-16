import axios from 'axios';

export const GetCurrencyList = (page, perPage) => async dispatch => {
    try {
        dispatch({
            type:"CURRENCY_LIST_LOADING"
        })
        const res = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=44fdf535b2de176bc8c9ee55df6a598f529d8c0c&per-page="+perPage+"&page="+page)
        dispatch({
            type:"CURRENCY_LIST_SUCCESS",
            payload: res
        })
    } catch (e) {
        dispatch({
            type:"CURRENCY_LIST_FAILED"
        })
    }
}