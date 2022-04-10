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
import sarah from "../assets/avatars/sarahedoImg.png";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from 'react-router-dom'
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
    const { users, questions } = this.props;
    console.log("questions" + JSON.stringify(questions));
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
            {Object.keys(questions).map((question) => {
              return (
                <Col sm="20" key={questions[question].id}>
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
                              src={sarah}
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
                              <CardText>Would you rather?</CardText>
                              <Button style={{ width: "100px" }}>
                                <Link to={`/questions/${questions[question].id}`}>
                                  View Poll
                                </Link>
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </div>
                  </Card>
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
            <h2>hellele</h2>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser: authedUser,
    users: users,
    questions: questions,
  };
}
export default connect(mapStateToProps)(Home);
