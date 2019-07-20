import axios from 'axios';

export function listBooksAction() {
  return async dispatch => {
    const response = await axios.get('/books');
    if (response.status === 200) {
      dispatch({ type: 'BOOK_LIST', payload: response.data });
    } else {
      dispatch({ type: 'ERROR_LIST', payload: '' });
    }
  };
}

export function addBooksAction(book, history) {
  return async dispatch => {
    await axios
      .post('/books/add', book)
      .then(function() {
        dispatch(listBooksAction());
        history.push('/')
      })
      .catch(function(error) {
        console.log('error', error);
        dispatch({
          type: 'ADD_BOOK_REJECTED',
          payload: error
        });
      });
  };
}

export function deleteBooksAction(bookId) {
  return dispatch => {
    axios
      .get('/books/delete/' + bookId)
      .then(function() {
        dispatch(listBooksAction());
      })
      .catch(function(error) {
        dispatch({
          type: 'DELETE_BOOK_REJECTED',
          payload: error
        });
      });
  };
}

export function getThisBookAction(bookId) {
  return async dispatch => {
    await axios
      .get(`/books/viewbook/${bookId}`)
      .then(function(response) {
        dispatch({
          type: 'GET_BOOK',
          payload: response.data
        });
      })
      .catch(function(error) {
        dispatch({
          type: 'GET_BOOK_REJECTED',
          payload: error
        });
      });
  };
}

export function editThisBookDataAction({_id, ...bookData}, history) {
  return dispatch => {
    axios
      .put('/books/update/' + _id, bookData)
      .then(function(response) {
        console.log('API RESPONSE' + response);
        dispatch(listBooksAction())
        history.push('/')
      })
      .catch(function(error) {
        console.log('error', error);
        dispatch({
          type: 'UPDATE_BOOK_REJECTED',
          payload: error
        });
      });
  };
}
