import messagesServices from '../services/messagesServices'

export const getMessagesfromProperty = (itemObject) => {
    return async dispatch => {
        const messages = await messagesServices.getMessagesfromProperty(itemObject)
        dispatch({
            type: "MESSAGES",
            data: messages
            })
    }
}

export const createMessage = (itemObject) => {
    return async dispatch => {
        const message = await messagesServices.createMessage(itemObject)
        dispatch({
            type: "NEW_MESSAGE",
            data: message
            })
            window.scrollTo({left: 0, top:document.body.scrollHeight,  behavior: "smooth"});
    }
}

export const resetMessages = () => {
    return async dispatch => {
        dispatch({
            type: "RESET_MESSAGES",
            data: []
            })
    }
}


const messagesReducer = (state=[], action) => {
    switch(action.type) {
        case 'MESSAGES':
            return action.data
        case 'RESET_MESSAGES':
            return action.data
        case 'NEW_MESSAGE':
            return state.concat(action.data)
        default:
            return state
    }
}

export default messagesReducer