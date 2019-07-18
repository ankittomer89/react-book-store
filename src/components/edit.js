import React, { Component } from 'react';
import axios from "axios";

class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleaddBookData = (event) => {
        event.preventDefault();
        const { bookName, bookAuthor, category, price, description } = this.state;
        let inputData = {
            bookName,
            bookAuthor,
            category,
            price,
            description
        }
        this.props.addBookData(inputData)
    }
    async componentDidMount() {
        const { _id } = this.props.match.params;
        const { data } = await axios.get(`/books/viewbook/${_id}`)
        this.setState({ //the error happens here
            books: data
        });
        //console.log('====================id',data.bookAuthor)

        // axios.get('/books/viewbook/'+_id)
        // .then(function (response) {
        //  console.log('API RESPONSE' + response);
        //   dispatch({
        //       type: 'FETCH_BOOK',
        //       payload: response

        //     })
        // })
        // .catch(function (error) {
        //   console.log("error",error);
        //   dispatch({
        //       type: 'FETCH_BOOK_PENDING',
        //       payload: error
        //     })
        // });  
    }
    render() {
        if (this.state.books !== null) {
            console.log('====================', this.state.books.bookName)
            return (
                <div className="container-fluid">
                    <div className="container">
                        <div className="formBox">
                            <form onSubmit={this.handleaddBookData}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h1>Edit Book</h1>
                                    </div>
                                    <div className="col-sm-3">
                                        <td><a href='/' className="btn btn-secondary btn-lg" > Book List</a></td>
                                    </div>
                                    <div className="col-sm-3">
                                        <td><a href='/add' className="btn btn-secondary btn-lg" > Add Book</a></td>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="inputBox ">
                                            <div className="inputText"></div>
                                            <input type="text" name="bookName" placeholder='Book Name' value={this.state.books.bookName || ''} onChange={this.handleChange} className="input" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="bookAuthor" onChange={this.handleChange}  placeholder='Book Author' value={this.state.books.bookAuthor || ''} className="input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="category" onChange={this.handleChange} placeholder='Book Category' value={this.state.books.category || ''}    className="input" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="number" name="price" placeholder='Book Price' value={this.state.books.price || ''}  onChange={this.handleChange} className="input" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="description" value={this.state.books.description || ''} placeholder='Book Description' onChange={this.handleChange} className="input" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="submit" name="" className="button btn btn-dark" value="Update Book" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

export default edit;