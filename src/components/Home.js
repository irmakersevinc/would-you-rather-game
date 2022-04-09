import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody,
} from "reactstrap";
import sarah from "../assets/avatars/sarahedoImg.png";

class Home extends Component {
  render() {
    const { users, questions } = this.props;
    console.log("questions" + JSON.stringify(questions));
    return (
      <div>
        <Container>
          {Object.keys(users).map((user) => {
            return (
              <Col sm="6" key={users[user].id}>
                <Card >
                  <CardHeader>{user}</CardHeader>
                  <div>{users[user].name}</div>
                  <div>
                    <CardTitle>
                      <strong>Would you rather?</strong>
                    </CardTitle>
                    <CardBody>
                      <CardText>{users[user].avatarURL}</CardText>
                      <div>
                        <img
                          src={sarah}
                          alt={`Avatar of ${users[user].name}`}
                          className="avatar"
                        />
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Container>
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
