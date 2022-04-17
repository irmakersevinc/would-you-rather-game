import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Col,
  CardText,
  Row,
} from "reactstrap";
class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.users.length !== 0 &&
            Object.keys(this.props.users).map((user) => {
              return (
                <Card>
                  <CardHeader>{this.props.users[user].name}</CardHeader>
                  <div>
                    <CardBody>
                      <Row
                        style={{
                          direction: "row",
                        }}
                      >
                        <Col sm="3">
                          <img
                            src={this.props.users[user].avatarURL}
                            alt={`Avatar of ${this.props.users[user].name}`}
                            className="avatar"
                            width="120px"
                          />
                        </Col>
                        <Col sm="6">
                          <p>
                            Answered questions{" "}
                            {Object.keys(this.props.users[user].answers).length}{" "}
                          </p>
                          <hr />
                          <p>
                            Created questions{" "}
                            {this.props.users[user].questions.length}{" "}
                          </p>
                        </Col>
                        <Col sm="3">
                          <Card>
                            <CardHeader>Score</CardHeader>
                            <CardBody>
                              <CardText>
                                {Object.keys(this.props.users[user].answers)
                                  .length +
                                  this.props.users[user].questions.length}
                              </CardText>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users: users,
    questions: questions,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
