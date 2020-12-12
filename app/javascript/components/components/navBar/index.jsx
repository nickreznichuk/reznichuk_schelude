import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" fixed="bottom">
          <Navbar.Brand to="/">Pirnat-brows</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-1 mr-auto">
              <Link className="mt-1 text-center nav_link_styles" to="/">Графік</Link>
              <Link className="mt-1 text-center nav_link_styles" to="/new_record">Новий запис</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
NavbarComponent.propTypes = {
  // loading: PropTypes.bool.isRequired,
  // errorMessage: PropTypes.string.isRequired,
  // logOut: PropTypes.func.isRequired,
  // token: PropTypes.string.isRequired,
  // user: PropTypes.shape({
  //   email: PropTypes.string.isRequired
  // })
};
const mapStateToProps = ({
}) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);