import React,{Component} from "react";
import { connect } from 'react-redux'

class ViewPoll extends Component {
    render() {
        return (
            <div>
                {this.props.question_id}
            </div>
        )
    }
        
}

function mapStateToProps ({questions,users,authedUser}, props){
    console.log("props: " + JSON.stringify(props))
    const {question_id} = props.match.params
    return {
        question_id,
        authedUser: authedUser,
        users: users,
        questions: questions,
        
    }
}
export default connect(mapStateToProps)(ViewPoll);