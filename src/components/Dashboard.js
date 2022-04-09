import React, {Component} from 'react'
import {connect} from 'react-redux'
import { CardHeader,Card,Button, CardTitle, CardText, CardFooter, Col,CardBody } from 'reactstrap';
class Dashboard extends Component {

    render() {
        const {users} = this.props
        console.log("users"+JSON.stringify(users))
        return (
            <div>
            <Card>
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button variant="primary">Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
      
            <Card>
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>
        )
    }
}

function mapStateToProps({authedUser,users}) {
    return {
        authedUser: authedUser,
        users: users
    }
}
export default connect(mapStateToProps)(Dashboard);