import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Input,
  Form,
} from "reactstrap";
import { handleAddQuestion } from "../actions/questions";
import { Link, withRouter } from 'react-router-dom'

class NewQuesion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  addQuestion = (e) => {
    e.preventDefault();
    const { users, dispatch, questions } = this.props;
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser,
    };
    console.log(questions);

    dispatch(handleAddQuestion(question));
    console.log(questions);

    this.setState({ optionOne: "", optionTwo: "" });
    this.props.history.push("/");

  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader>Create New Question</CardHeader>
          <CardBody>
            <CardText> Complete the questions: </CardText>
            <CardTitle>
              <strong>Would you rather ..</strong>
            </CardTitle>
            <Form onSubmit={this.addQuestion}>
              <Input
                type="text"
                placeholder="Enter Question One Text Here"
                onChange={this.handleChange}
                name="optionOne"
                required
              />
              <hr />
              <p>OR</p>
              <hr />
              <Input
                type="text"
                placeholder="Enter Question One Text Here"
                onChange={this.handleChange}
                name="optionTwo"
                required
              />
              <Button type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
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
export default withRouter(connect(mapStateToProps)(NewQuesion));
