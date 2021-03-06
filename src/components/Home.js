import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody,
} from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
class Home extends Component {
  //const [toggleState,setToggleState] = useState(1);
  state = {
    toggleState: 1,
  };
  //{users[user].id}
  static propTypes = {
    questions: PropTypes.object.isRequired, //we specifiy this props is required
    users: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
  };

  toggleTab = (index) => {
    this.setState({
      toggleState: index,
    });
  };

  render() {
    const { users, questions, authedUser } = this.props;
    const sortedQuestions = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    const unAnsweredQuestions = Object.keys(questions).filter(
      (question) => !questions[question].optionOne.votes.includes(authedUser) && !questions[question].optionTwo.votes.includes(authedUser)
    );
    const answeredQuestions = Object.keys(questions).filter((question) =>
      questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser)
    );

    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={
              this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.toggleTab(1)}
          >
            UnAnswered Questions
          </button>
          <button
            className={
              this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.toggleTab(2)}
          >
            Answered Questions
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              this.state.toggleState === 1
                ? "content  active-content"
                : "content"
            }
          >
            <hr />
            {sortedQuestions.map((question) => {
              return (
                <Col sm="20" key={questions[question].id}>
                  {unAnsweredQuestions &&
                    unAnsweredQuestions.includes(questions[question].id) && (
                      <Card style={{ marginTop: "20px" }}>
                        <CardHeader>
                          <strong>
                            {users[questions[question].author].name} : asks
                          </strong>
                        </CardHeader>
                        <div>
                          <CardBody>
                            <Row
                              style={{
                                direction: "row",
                              }}
                            >
                              <Col sm="5">
                                <img
                                  src={users[questions[question].author].avatarURL}
                                  alt={`Avatar of ${
                                    users[questions[question].author].name
                                  }`}
                                  className="avatar"
                                  width="120px"
                                />
                              </Col>
                              <Col sm="6">
                                <div>
                                  <CardTitle>
                                    <strong>Would you rather?</strong>
                                  </CardTitle>
                                  <CardText>..{questions[question].optionOne.text}..</CardText>
                                  <Button style={{ width: "100px" }}>
                                    <Link
                                      to={`/questions/${questions[question].id}`}
                                    >
                                      View Poll
                                    </Link>
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </div>
                      </Card>
                    )}
                </Col>
              );
            })}
          </div>
          <div
            className={
              this.state.toggleState === 2
                ? "content  active-content"
                : "content"
            }
          >
            <hr />
            {sortedQuestions.map((question) => {
              return (
                <Col sm="20" key={questions[question].id}>
                  {answeredQuestions &&
                    answeredQuestions.includes(questions[question].id) && (
                      <Card style={{ marginTop: "20px" }}>
                        <CardHeader>
                          <strong>
                            {users[questions[question].author].name} : asks
                          </strong>
                        </CardHeader>
                        <div>
                          <CardBody>
                            <Row
                              style={{
                                direction: "row",
                              }}
                            >
                              <Col sm="5">
                                <img
                                  src={users[questions[question].author].avatarURL}
                                  alt={`Avatar of ${
                                    users[questions[question].author].name
                                  }`}
                                  className="avatar"
                                  width="120px"
                                />
                              </Col>
                              <Col sm="6">
                                <div>
                                  <CardTitle>
                                    <strong>Would you rather?</strong>
                                  </CardTitle>
                                  <CardText>..{questions[question].optionOne.text}..</CardText>
                                  <Button style={{ width: "100px" }}>
                                    <Link
                                      to={`/questions/${questions[question].id}`}
                                    >
                                      View Poll
                                    </Link>
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </div>
                      </Card>
                    )}
                </Col>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  // .sort((a,b) => b.timestamp - a.timestamp) Object.assign({}, ['a','b','c'])
// Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  return {
    authedUser: authedUser,
    users: users,
    questions: questions,
  };
}
export default connect(mapStateToProps)(Home);
