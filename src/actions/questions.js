import { saveQuestion, saveAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleAddQuestion(question) {
    return(dispatch, getState) => {
        const {authedUser} = getState()

        return saveQuestion({
            question
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function handleAddAnswer (answer) {
    return(dispatch, getState) => {
        const {authedUser} = getState()

        return saveAnswer({
            answer
        })
        .then((answer) => dispatch(addAnswer(answer)))
    }
}

function addAnswer(answer) {
    return {
        type: ADD_ANSWER,
        answer
    }
}