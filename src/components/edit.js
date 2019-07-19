import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editThisBookDataAction } from '../action/index';

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      bookAuthor: '',
      category: '',
      price: '',
      description: ''
    };
  }
  handleChangeEditBook = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEditdBookData = event => {
    event.preventDefault();
    this.props.editThisBookData(this.state, this.props.history);
  };
  componentDidMount() {
    const { bookList, match, history } = this.props;
    const { _id } = match.params || {};
    if (_id) {
      const book = bookList.find(item => item._id === Number(_id));
      if (book) {
        this.setState(book);
      } else {
        history.replace('/');
      }
    } else {
      history.replace('/');
    }
  }
  render() {
    const { bookName, bookAuthor, category, price, description } = this.state;
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="formBox">
            <form onSubmit={this.handleEditdBookData}>
              <div className="row">
                <div className="col-sm-12">
                  <h1>Edit Book</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group ">
                    <input
                      type="text"
                      name="bookName"
                      placeholder="Book Name"
                      value={bookName}
                      onChange={this.handleChangeEditBook}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="bookAuthor"
                      placeholder="Book Author"
                      value={bookAuthor}
                      onChange={this.handleChangeEditBook}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="category"
                      placeholder="Book Category"
                      value={category}
                      onChange={this.handleChangeEditBook}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="number"
                      name="price"
                      placeholder="Book Price"
                      value={price}
                      onChange={this.handleChangeEditBook}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="description"
                      value={description}
                      placeholder="Book Description"
                      onChange={this.handleChangeEditBook}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="submit"
                    className="button btn btn-dark"
                    value="Update Book"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ bookData }) => ({
  bookList: bookData
});

const mapDispatchToProps = {
  editThisBookData: editThisBookDataAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook);
