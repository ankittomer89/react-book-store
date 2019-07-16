import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faAngleRight } from '@fortawesome/free-solid-svg-icons';
//import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {

//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {

//     };
// }

class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    async componentDidMount() {
       var response = await axios.get('http://localhost:8080/books')
        const toDoItems = response.data
        this.setState({books: toDoItems}) // or this.setState({toDoItems})
       }

    

    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr kay={book.id}>
                    <td data-th="Product">
                        <div className="row">
                            <div className="col-sm-10">
                                <h4 className="nomargin"> {book.bookName}</h4>
                                <p>{book.description}</p>

                            </div>
                        </div>
                    </td>
                    <td data-th="Price">{book.bookAuthor}</td>
                    <td data-th="Price">{book.category}</td>
                    <td data-th="Price">{book.price} &#x20b9;</td>
                    <td className="actions" data-th="">
                        <a href="/edit" className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faEdit} /> </a>
                        <button className="btn btn-danger btn-sm">   <FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                </tr>
            );
        });

        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th Style="width:50%">Books</th>
                            <th Style="width:10%">Author</th>
                            <th Style="width:10%">Category</th>
                            <th Style="width:10%">Price</th>
                            <th Style="width:10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="hidden-xs"></td>
                            <td><a href='/add' className="btn btn-secondary" >Add Book</a></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(list);

export default list;