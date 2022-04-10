import React from "react";
import { connect } from "react-redux";
import { Nav,NavItem,NavLink } from "reactstrap";

const NewQuesion = () => {
    return (
        <div>
            New Question Page
        </div>
    )
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser: authedUser,
        users: users,
        questions: questions,
    }
}
export default connect(mapStateToProps)(NewQuesion);