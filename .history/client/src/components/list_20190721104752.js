import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listBooksAction, deleteBooksAction } from '../action/index';

const List = ({ bookList, listBooks, deleteBooks }) => {
  useEffect(() => {
    listBooks();
  },[]);

  return (
    <div className="container">
      <table id="cart" className="table table-striped table-bordered mt-5 table-hover table-small">
        <thead>
          <tr>
            <th>Books</th>
            <th>Author</th>
            <th>Category</th>
            <th>Price</th>
            <th width="100">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(book => {
            return (
              <tr key={book._id}>
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
                  <Link
                    to={`/edit/${book._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => deleteBooks(book._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ bookData }) => ({
  bookList: bookData
});

const mapDispatchToProps = {
  listBooks: listBooksAction,
  deleteBooks: deleteBooksAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
