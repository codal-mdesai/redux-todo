const DefaultState = {
    loading:false,
    data:[],
    errorMsg: "",
    count:0
}

const CurrencyReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "CURRENCY_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg:""
            }
        case "CURRENCY_LIST_FAILED":
                return {
                    ...state,
                    loading: false,
                    errorMsg: "Unable to get currency list!"
                }
        case "CURRENCY_LIST_SUCCESS" :
                return {
                    ...state,
                    loading: false,
                    data : action.payload.data,
                    errorMsg:"",
                    count: 1000
                }
        default:
            return state
    }
}
export default CurrencyReducer;
