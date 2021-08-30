import { combineReducers } from 'redux';
import { loginLogout } from './login-logout';



const reducer=combineReducers({
    login_logout:loginLogout
})

export default reducer