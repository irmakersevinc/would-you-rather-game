import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Navs from "./Navs";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import ViewPoll from "./ViewPoll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <Navs />
          <div>
            {authedUser === null ? (
              <Login />
            ) : (
              <div>
                <Routes>
                  <Route exact path="/"  element={<Home/>} />
                  <Route  path="/newQuestion"  element={<NewQuestion/>} />
                  <Route  path="/leaderBoard"  element={<LeaderBoard/>} />
                  <Route  path='/questions/:question_id'  element={<ViewPoll/>} />

                </Routes>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser ,
  };
};
export default connect(mapStateToProps)(App);
