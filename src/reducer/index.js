const rootReducer = (state = {getData:[],bookDeleted:[],bookData:[]}, action) => {
    switch (action.type) {
        case 'BOOK_LIST':
            return {
                ...state,
                getData: [...state.getData,
                action.payload]
            }
            case 'ADD_BOOK':
            return {
                ...state,
                newData: [...state.newData,
                action.payload]
            }
            case 'DELETE_BOOK':
            return {
                ...state,
                bookDeleted: action.payload
            }
            case 'GET_BOOK':
            return {
                ...state,
                bookData: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer