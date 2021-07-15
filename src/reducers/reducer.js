const initialData = {
    list:[]
}
const reducer = (state = initialData, action) => {
    switch(action.type) {
        case "ADD_TODO":
                const {id, data} = action.payload;
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id,
                            data
                        }
                    ]
                }
                break;
                case "DELETE_TODO":
                    const newList = state.list.filter((element) => element.id !== action.payload.data.id);
                    return {
                        ...state,
                        list:newList
                    }
                break;
                case "REMOVE_TODO":
                    // return (state = initialData);
                    return {
                        ...state,
                        list:[]
                    }
                break;
        default:
            return state;
    }
}
export default reducer;