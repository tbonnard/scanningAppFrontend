import {combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import propertyReducer from './reducers/propertyReducer'
import messagesReducer from './reducers/messagesReducer'
import claimReducer from './reducers/claimReducer';
import loadingReducer from './reducers/loadingReducer';
import notificationReducer from './reducers/notificationReducer';
import notifClaimerReducer from './reducers/notifClaimerReducer'


const appReducer = combineReducers({
  property:propertyReducer,
  messages:messagesReducer,
  claimProperties : claimReducer,
  loadingFlag : loadingReducer,
  notificationFlag: notificationReducer,
  notifClaimer:notifClaimerReducer
  })
  
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_USER') {
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
  }
  
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  
  export default store