const rootReducer = (state = { bookData: [] }, action) => {
  switch (action.type) {
    case 'BOOK_LIST':
      return {
        ...state,
        bookData: action.payload
      };
      case 'Search_BOOK_LIST':
        console.log('------>',action.payload)
      return {
        ...state,
        bookData: action.payload
      };
    case 'ADD_BOOK':
      return {
        ...state,
        getData: [...state.getData, action.payload]
      };
    case 'DELETE_BOOK':
      let updatedList = action.payload.data;
      return {
        ...state,
        bookData: updatedList
      };
    case 'GET_BOOK':
      return {
        ...state,
        bookData: action.payload
      };
    case 'UPDATE_BOOK':
      return {};
    default:
      return state;
  }
};

export default rootReducer;
