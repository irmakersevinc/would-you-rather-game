import React, { Component } from "react";
//import { Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";
import "./navs.css";

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
          <ul id="ul-nb">
            <li>
              <NavLink to="/" onClick={this.handleNavigation}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/newQuestion" onClick={this.handleNavigation}>
                New Question
              </NavLink>
            </li>

            <li>
              <NavLink to="/leaderBoard" onClick={this.handleNavigation}>
                Leader Board
              </NavLink>
            </li>

            {user !== null && (
              <nav>
  
                <li>
                  <NavLink to="/" onClick={this.logoutUser}>
                    Logout
                  </NavLink>
                </li>
                <li>
                  <p style={{marginLeft:"50px", marginTop:"10px" }}>{`Hello, ${user.name}`}</p>
                </li>
              </nav>
            )}
          </ul>
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
