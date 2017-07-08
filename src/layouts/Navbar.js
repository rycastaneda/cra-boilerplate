import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { searchPeople } from '../actions/people';
import { connect } from 'react-redux';

class Navbar extends Component {
    searchPerson(e) {
        e.preventDefault();
        this.props.dispatch(searchPeople(this.textInput.value));
    }
    render() {
        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand">Home</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                  <form className="navbar-form navbar-left" role="search" onSubmit={this.searchPerson.bind(this)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        ref={(input) => {
                            this.textInput = input;
                        }} />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
                </div>
              </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Navbar);
