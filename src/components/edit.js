import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThisBookAction, addThisBookDataAction } from '../action/index';


function mapStateToProps(state) {
    return {
        BooksData: state.bookData
    };
}
const mapDispatchToProps = dispatch => ({
    getThisBook: (_id) => dispatch(getThisBookAction(_id)),
    addThisBookData: (bookData) => dispatch(addThisBookDataAction(bookData))
});

class edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
            bookName: null,
            bookAuthor: null,
            category: null,
            price: null,
            description: null,
        }
    }
    handleChangeEditBook = (event) => { 
        event.preventDefault();
        console.log('====>>event.target.value', event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    handleEditdBookData = (event) => { alert('ldd')
        event.preventDefault();
        const { _id } = this.props.match.params;
        const { bookName, bookAuthor, category, price, description } = this.state;
        let inputData = {
            bookName,
            bookAuthor,
            category,
            price,
            description
        }
        this.props.addThisBookData(inputData, _id)
    }
    async componentDidMount() {
        const { _id } = this.props.match.params;
        await this.props.getThisBook(_id);
        this.setState({
            books: this.props.BooksData
        });

    }
    render() {
        if (this.state.books !== null) {
            return (
                <div className="container-fluid">
                    <div className="container">
                        <div className="formBox">
                            <div className="col-sm-12">
                                <div className="col-sm-3">
                                    <td><a href='/' className="btn btn-secondary btn-lg" > Book List</a></td>
                                </div>
                                <div className="col-sm-3">
                                    <td><a href='/add' className="btn btn-secondary btn-lg" > Add Book</a></td>
                                </div>
                            </div>
                            <form onSubmit={e => this.handleEditdBookData(e)}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1>Edit Book</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="inputBox ">
                                            <div className="inputText"></div>
                                            <input type="text" name="bookName" placeholder='Book Name' value={this.state.books.bookName } onChange={e => this.handleChangeEditBook(e)} className="input" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="bookAuthor"  placeholder='Book Author' value={this.state.books.bookAuthor } onChange={this.handleChangeEditBook} className="input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="category" placeholder='Book Category' value={this.state.books.category } onChange={this.handleChangeEditBook} className="input" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="number" name="price" placeholder='Book Price' value={this.state.books.price} onChange={this.handleChangeEditBook} className="input" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="inputBox">
                                            <div className="inputText"></div>
                                            <input type="text" name="description" value={this.state.books.description || ''} placeholder='Book Description' onChange={this.handleChangeEditBook} className="input" />
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

export default connect(mapStateToProps, mapDispatchToProps)(edit);