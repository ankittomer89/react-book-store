import React, { Component } from 'react';


class edit extends Component {

    componentDidMount(){
        axios.get(BASE_URL+'/books/viewbook/'+_id)
        .then(function (response) {
         console.log('API RESPONSE' + response);
          dispatch({
              type: 'FETCH_BOOK',
              payload: response
      
            })
        })
        .catch(function (error) {
          console.log("error",error);
          dispatch({
              type: 'FETCH_BOOK_PENDING',
              payload: error
            })
        });  
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="formBox">
                        <form>
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
                                        <input type="text" name="bookName" placeholder='Book Name' className="input" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="bookAuthor" placeholder='Book Author' className="input" />
                                    </div>
                                </div>    
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="category" placeholder='Book Category' className="input" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="number" name="price" placeholder='Book Price' className="input" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="inputBox">
                                        <div className="inputText"></div>
                                        <input type="text" name="description" placeholder='Book Description' className="input" />
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
    }
}

export default edit;