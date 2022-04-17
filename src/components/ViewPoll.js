import React, { Component } from "react";
import { connect } from "react-redux";
import {
  CardHeader,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Progress
} from "reactstrap";
import { handleAddAnswer } from "../actions/questions";
import { Link, withRouter } from "react-router-dom";

class ViewPoll extends Component {
  state = {
    answerText: "",
    question_id: "",
  };

  componentDidMount() {
    const pathname = window.location.pathname;
    const params = pathname.split("/");
    this.setState({
      question_id: params[2],
    });
  }
  handleRadioButton = (e) => {
    e.preventDefault();
    this.setState(
      {
        answerText: e.target.value,
      },
      () => console.log(this.state.answerText)
    );
  };
  handleAnswer = (e) => {
    e.preventDefault();
    if (this.state.answerText === "") {
      alert("Please choose one of the options!");
      return;
    }
    console.log(this.state.answerText);
    const { authedUser, dispatch, question_id } = this.props;
    const { answerText } = this.state;

    const answerObj = {
      authedUser: authedUser,
      qid: question_id,
      answer: answerText,
    };
    dispatch(handleAddAnswer(answerObj));
    this.setState({ answerText: "" });
    this.props.history.push("/");
  };
  render() {
    const { questions, users, authedUser, question_id } = this.props;
    console.log(question_id);

    const userOfQuestion = Object.keys(questions).filter(
      (question) => question == question_id
    );
    console.log(userOfQuestion);

    return (
      <div>
        <Container>
          {question_id &&
          !Object.keys(users[authedUser].answers).includes(question_id) ? (
            <Card>
              <CardHeader>{questions[userOfQuestion].author} asks: </CardHeader>
              <div>
                <CardBody>
                  <Row
                    style={{
                      direction: "row",
                    }}
                  >
                    <Col sm="5">
                      <img
                        src={users[questions[userOfQuestion].author].avatarURL}
                        alt={`Avatar of ${
                          users[questions[userOfQuestion].author].name
                        }`}
                        className="avatar"
                        width="120px"
                      />
                    </Col>
                    <Col sm="5">
                      <CardTitle>
                        <strong>Would you rather..</strong>
                      </CardTitle>
                      <Form onSubmit={this.handleAnswer}>
                        <FormGroup>
                          <Label check>
                            <Input
                              type="radio"
                              name="optionOne"
                              value={questions[userOfQuestion].optionOne.text}
                              checked={
                                this.state.answerText ===
                                questions[userOfQuestion].optionOne.text
                              }
                              onChange={this.handleRadioButton}
                            />{" "}
                            {questions[userOfQuestion].optionOne.text}{" "}
                          </Label>

                          <Label check>
                            <Input
                              type="radio"
                              name="optionTwo"
                              value={questions[userOfQuestion].optionTwo.text}
                              checked={
                                this.state.answerText ===
                                questions[userOfQuestion].optionTwo.text
                              }
                              onChange={this.handleRadioButton}
                            />{" "}
                            {questions[userOfQuestion].optionTwo.text}{" "}
                          </Label>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Card>
          ) : (
            <Card>
              <CardHeader>Asked by {questions[question_id].author}</CardHeader>
              <div>
                <CardBody>
                  <Row
                    style={{
                      direction: "row",
                    }}
                  >
                    <Col sm="5">
                      <img
                        src={users[questions[question_id].author].avatarURL}
                        alt={`Avatar of ${
                          users[questions[userOfQuestion].author].name
                        }`}
                        className="avatar"
                        width="120px"
                      />
                    </Col>
                    <Col sm="5">
                      <h1>Result:</h1>
                      <Card>
                        {questions[question_id].optionOne.votes.includes(
                          authedUser
                        ) ? (
                          <div>
                                                      <strong>{questions[question_id].optionOne.text}</strong>

                                  <Progress value="25">25%</Progress>

                          </div>
                        ) : (
                          <strong>{questions[question_id].optionTwo.text}</strong>
                        )}
                      </Card>
                      <Card>
                        {questions[question_id].optionOne.votes.includes(
                          authedUser
                        ) ? (
                          <p>{questions[question_id].optionTwo.text}</p>
                        ) : (
                          <p>{questions[question_id].optionOne.text}</p>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Card>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, ownProps) {
  const { question_id } = ownProps.match.params;

  return {
    question_id: question_id,
    authedUser: authedUser,
    users: users,
    questions: questions,
  };
}
export default withRouter(connect(mapStateToProps)(ViewPoll));
