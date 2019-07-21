import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { searchBooksAction } from '../action/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemVal: '',
    };
  }

  handleSearchChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.searchData(this.state);
  };

  render() {
    const {itemVal } = this.state;
    const { location } = this.props
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <span className="navbar-brand mb-0 h3 text-center">
            <h1>
              <FontAwesomeIcon icon={faBook} /> Book Store
              </h1>
          </span>
        </Link>
        <form onSubmit={this.handleSearch} className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            name="itemVal"
            placeholder="Search Book Name"
            aria-label="Search"
            onChange={this.handleSearchChange}
            value=itemVal}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
            </button>
          {location.pathname === '/add' ?
            <Link to="/" className="btn btn-secondary ml-5">
              Book List
              </Link>
            : <div>
              {location.pathname === '/' ?
                <Link to="/add" className="btn ml-5 btn-secondary">
                  Add Book
              </Link> :
                <div>
                  <Link to="/" className="btn btn-secondary ml-5">
                    Book List
              </Link>
                  <Link to="/add" className="btn ml-5 btn-secondary">
                    Add Book
              </Link>
                </div>}
            </div>
          }
        </form>
      </nav>
    );
  }
}



// const Header = ({ location }) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <Link to="/">
//         <span className="navbar-brand mb-0 h3 text-center">
//           <h1>
//             <FontAwesomeIcon icon={faBook} /> Book Store
//           </h1>
//         </span>
//       </Link>
//       <form onSubmit={this.handleaddBookData} className="form-inline">
//         <input
//           className="form-control mr-sm-2"
//           type="search"
//           placeholder="Search Book Name"
//           aria-label="Search"
//           name="itemVal"
//         />
//         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//           Search
//         </button>
//         {location.pathname === '/add' ? 
//           <Link to="/" className="btn btn-secondary ml-5">
//             Book List
//           </Link>
//         : <div>
//             {location.pathname === '/' ?
//               <Link to="/add" className="btn ml-5 btn-secondary">
//                 Add Book
//           </Link> :
//               <div>
//                 <Link to="/" className="btn btn-secondary ml-5">
//                   Book List
//           </Link>
//                 <Link to="/add" className="btn ml-5 btn-secondary">
//                   Add Book
//           </Link>
//               </div>}
//           </div>
//         }
//       </form>
//     </nav>
//   );
// };

//export default withRouter(Header);
const mapDispatchToProps = {
  searchData: searchBooksAction
};

// export default connect(
//   null,
//   mapDispatchToProps
// )(Header);
export default compose( withRouter, connect(null, mapDispatchToProps) )(Header);
