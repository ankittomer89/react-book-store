import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBooksAction } from '../action/index';

class AddBook extends Component {
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleaddBookData = event => {
    event.preventDefault();
    this.props.addBookData(this.state, this.props.history);
  };

  render() {
    const { bookName, bookAuthor, category, price, description } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <div className="formBox">
              <form onSubmit={this.handleaddBookData}>
                <div className="text-center">
                    <h1>Add New Book</h1>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group ">
                      <div className="inputText" />
                      <input
                        type="text"
                        name="bookName"
                        value={bookName}
                        placeholder="Book Name"
                        onChange={this.handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="inputText" />
                      <input
                        type="text"
                        name="bookAuthor"
                        value={bookAuthor}
                        onChange={this.handleChange}
                        placeholder="Book Author"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="inputText" />
                      <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={this.handleChange}
                        placeholder="Book Category"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="inputText" />
                      <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={this.handleChange}
                        placeholder="Book Price"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="inputText" />
                      <textarea
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        placeholder="Book Description"
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
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addBookData: addBooksAction
};

export default connect(
  null,
  mapDispatchToProps
)(AddBook);
