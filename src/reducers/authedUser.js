import { LOGOUT_AUTHED_USER, SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state=null, action) { //initial state tanımlamak daha doğru
    switch(action.type) {
        case SET_AUTHED_USER : 
            return action.id
        case LOGOUT_AUTHED_USER :
            return action.id; //direkt null da denilebilir
        default :
            return state
    }
}