import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import './login.css'
import PropTypes from 'prop-types'

class Login extends Component {
    state = {
        username: "",
    }
    static propTypes = {
        users: PropTypes.array.isRequired,
    }

    handleInput = (e) => {
        e.preventDefault();
        const {value, name} = e.target
        console.log("value: "+ value);
        this.setState({
            username: value
        })
    }

    loginButtonClicked = (e) => {
        e.preventDefault();
        const {users,dispatch} = this.props;
        console.log("users: " + users);

        const {username} = this.state
        console.log("username: " + username);
        const user = users.filter( user=> user === username)
        console.log("user: " + user);

        if(user.length !== 0) {
            dispatch(setAuthedUser(username))
            console.log("login")
        }
    }
    render () {
        return (
            <div className="app">
                <div className="login-form">    
                    <div className="form">
                        <form onClick={this.loginButtonClicked}>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="uname" required onChange={this.handleInput}/>
                            </div>
                            <div className="button-container">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users: Object.keys(users)
    }
}
export default connect(mapStateToProps)(Login);