const rootReducer = (state = {data:[]}, action) => {
    switch (action.type) {
        case 'BOOK_LIST':
            return {
                ...state,
                data: [...state.data,
                action.payload]
            }ADD_BOOK

        default:
            return state;
    }
}

export default rootReducer