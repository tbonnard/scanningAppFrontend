import claimServices from '../services/claimServices'

export const claimProperty = (itemObject) => {
    return async dispatch => {
        const messages = await claimServices.claimProperty(itemObject)
        dispatch({
            type: "CLAIM",
            data: messages
            })
    }
}


const claimReducer = (state=[], action) => {
    switch(action.type) {
        case 'CLAIM':
            return action.data
        default:
            return state
    }
}

export default claimReducer