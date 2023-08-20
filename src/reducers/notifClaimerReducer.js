
export const setnotifClaimerReducer = (flag) => {
    return async dispatch => {
        dispatch({
            type: "NOTIFICATION_CLAIMER",
            data: flag
            })
    }
}

const notifClaimerReducer = (state=false, action) => {
    switch(action.type) {
        case 'NOTIFICATION_CLAIMER':
            return action.data
        default:
            return state
    }
}

export default notifClaimerReducer