import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { listBooksAction, deleteBooksAction } from '../action/index';


function mapStateToProps(state) {
    return {
        BooksList : state.getData,
        BookDeleted : state.bookDeleted
    };
}

const mapDispatchToProps = dispatch => ({
    listBooks: () => dispatch(listBooksAction()),
    deleteBooks: (_id) => dispatch(deleteBooksAction(_id))
});

let booksItem;
class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: '',
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('hit me ',this.props.BookDeleted)
        this.setState({books: this.props.BookDeleted })
    }

    componentDidMount() {
        this.props.listBooks();
    }
    deleteBook = (_id) => {
        this.props.deleteBooks(_id);
    }

    render() {
        booksItem = this.props.BooksList.map((bookItems = []) => {
            if(bookItems.length !== undefined){
            return bookItems.map((book, index) => {
                return (
                    <tr key={index}>
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
                            <a href={`/edit/${book._id}`} className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faEdit} /> </a>
                            <button className="btn btn-danger btn-sm" onClick={() => this.deleteBook(book._id)} ><FontAwesomeIcon icon={faTrash} /></button>
                        </td>
                    </tr>
                )
            })
        }
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
                        {booksItem}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(list);