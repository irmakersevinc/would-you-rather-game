import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Navs from "./Navs";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import ViewPoll from "./ViewPoll";
import PageNotFound from "./PageNotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <Navs authedUser={authedUser}/>
          <div>
            {authedUser === null ? (
              <Login />
            ) : (
                <Switch>
                  <Route exact path="/" component={Home}  />
                  <Route  path="/newQuestion" component={NewQuestion}  /> {/* /add olacak*/}
                  <Route  path="/leaderBoard" component={LeaderBoard}  />
                  <Route  path='/questions/:question_id' component={ViewPoll}   />
                  <Route  path="/login" component={Login}  />
                  <Route  path="/*" component={PageNotFound}  />
                </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser ,
  };
};
export default connect(mapStateToProps)(App);
