import {combineReducers} from 'redux'
import contacts from './contactReducer'
import user from './userReducer'

export default combineReducers({
    user,contacts
})