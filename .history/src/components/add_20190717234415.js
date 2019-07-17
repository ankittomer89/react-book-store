import React, { Component } from 'react';
import axios from "axios";
import { addBooks } from '../action/index';

class add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: null,
            bookAuthor: null,
            category: null,
            price: null,
            description: null,
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { bookName, bookAuthor, category, price, description } = this.state;
        let inputData = {
            bookName,
            bookAuthor,
            category,
            price,
            description
        }
        axios.post('http://localhost:8080/books/add', inputData)
            .then(function (response) {
                console.log('i am response-------------------------',response);
            })
            .catch(function (error) {
                console.log("error", error);
                
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="formBox">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1>Add New Book</h1>
                                </div>
                                <div className="col-sm-6">
                                    <td><a href='/' className="btn btn-secondary btn-lg float-right" > Book List</a></td>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="inputBox ">
                                        <div className="inputText"></div>
                                        <input type="text" name="bookName" value={this.state.bookName || ''} placeholder='Book Name'
                                            onChange={this.handleChange} className="input" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="bookAuthor" value={this.state.bookAuthor || ''} onChange={this.handleChange} placeholder='Book Author' className="input" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="category" value={this.state.category || ''} onChange={this.handleChange} placeholder='Book Category' className="input" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="number" name="price" value={this.state.price || ''} onChange={this.handleChange} placeholder='Book Price' className="input" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="description" value={this.state.description || ''} onChange={this.handleChange} placeholder='Book Description' className="input" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" className="button btn btn-dark" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default add;