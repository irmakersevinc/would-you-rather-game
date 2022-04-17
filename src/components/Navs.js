import React, { Component } from "react";
//import { Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";
class Navs extends Component {
  handleNavigation = (event) => {
    if (!this.props.user) {
      event.preventDefault();
    }
  };

  logoutUser = (event) => {
    const { dispatch } = this.props;
    dispatch(logoutAuthedUser(null));
  };
  render() {
    const { user } = this.props;
    return (
      <div className="nav-container">
        <nav>
          <NavLink to="/" onClick={this.handleNavigation}>
            Home
          </NavLink>
          <NavLink to="/newQuestion" onClick={this.handleNavigation}>
            New Question
          </NavLink>
          <NavLink to="/leaderBoard" onClick={this.handleNavigation}>
            Leader Board
          </NavLink>
          {user !== null && (
            <nav>
              <span>{`Hello, ${user.name}`}</span>
              <NavLink to="/" onClick={this.logoutUser}>
                Logout
              </NavLink>
            </nav>
          )}
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser === null ? null : users[authedUser],
  };
}

export default connect(mapStateToProps)(Navs);
