import axios from "axios";

export function listBooksAction() {
    return async (dispatch) => {
        let response = await axios.get('http://localhost:8080/books');
        if (response.status === 200) {
            dispatch({ type: "BOOK_LIST", payload: response.data })
        } else {
            dispatch({ type: "ERROR_LIST", payload: "" })
        }
    }
}

export function addBooksAction(book) {
    console.log('------------------> i am in action')
    return dispatch => {
        axios.post('http://localhost:8080/books/add', book)
            .then(function (response) {
                // console.log(response);
                dispatch({
                    type: 'SAVE_BOOK',
                    payload: response

                })
            })
            .catch(function (error) {
                console.log("error", error);
                dispatch({
                    type: 'SAVE_BOOK_REJECTED',
                    payload: error
                })
            });
    

}