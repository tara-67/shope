import {combineReducers} from 'redux';
import AuthReducer from '../../../test/redux/reducers/AuthReducer';
export default combineReducers({
    auth:AuthReducer,
    
})