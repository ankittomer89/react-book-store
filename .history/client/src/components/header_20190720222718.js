import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ location }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand mb-0 h3 text-center">
          <h1>
            <FontAwesomeIcon icon={faBook} /> Book Store
          </h1>
        </span>
      </Link>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Your Book"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        {location.pathname === '/add' ? (
          <Link to="/" className="btn btn-secondary ml-5">
            Book List
          </Link>
        ) : <div>
          {location.pathname === '/add' 
          <Link to="/add" className="btn ml-5 btn-secondary">
            Add Book
          </Link>
          <Link to="/" className="btn btn-secondary ml-5">
          Book List
        </Link>}
        </div>
        }
      </form>
    </nav>
  );
};

export default withRouter(Header);
