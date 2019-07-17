import axios from "axios";

export function listBooksAction() {
    return async (dispatch) => {
        let response =  await axios.get('http://localhost:8080/books');
        if(response.status == 200) {
            dispatch ({type: "BOOK_LIST", payload: response.data})
        } else{
            dispatch ({type: "ERROR_LIST", payload: ""})
        }
    }
}

// export const addToCart = (data, count) => ({
//     type: "ADD_TO_CART",
//     data,
//     count
// });