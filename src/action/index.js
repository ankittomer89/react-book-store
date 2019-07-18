import axios from "axios";

export function listBooksAction() {
    return async (dispatch) => {
        let response = await axios.get('/books');
        if (response.status === 200) {
            dispatch({ type: "BOOK_LIST", payload: response.data })
        } else {
            dispatch({ type: "ERROR_LIST", payload: "" })
        }
    }
}

export function addBooksAction(book) {

    return async dispatch => {
        await axios.post('/books/add', book)
            .then(function (response) {
                dispatch({
                    type: 'ADD_BOOK',
                    payload: response
                })
            })
            .catch(function (error) {
                console.log("error", error);
                dispatch({
                    type: 'ADD_BOOK_REJECTED',
                    payload: error
                })
            });
    }
}

export function deleteBooksAction(bookId) {

    return async dispatch => {
        axios.get('/books/delete/' + bookId)
            .then(function (response) {
                dispatch({
                    type: 'DELETE_BOOK',
                    payload: response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'DELETE_BOOK_REJECTED',
                    payload: error
                })
            });
    }
}

export function getThisBookAction(bookId) {

    return async dispatch => {
        await axios.get(`/books/viewbook/${bookId}`)
            .then(function (response) {
                dispatch({
                    type: 'GET_BOOK',
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: 'GET_BOOK_REJECTED',
                    payload: error
                })
            });
    }
}

export function addThisBookDataAction(bookData) {
console.log('====action================>',bookData)
    return dispatch => {
        // axios.post('/books/update/' + _id, book)
        //     .then(function (response) {
        //         console.log('API RESPONSE' + response);
        //         dispatch({
        //             type: 'UPDATE_BOOK',
        //             payload: response
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log("error", error);
        //         dispatch({
        //             type: 'UPDATE_BOOK_REJECTED',
        //             payload: error
        //         })
        //     });
    }
}