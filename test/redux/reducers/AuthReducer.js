import {
    EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGIN_ATTEMP, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,
    MOBAIL_REGISTER_CHENGED, PASSWORD_REGISTER_CHANGED, USER_REGISTER_ATTEMP, USER_REGISTER_SUCCESS
} from '../../../test/redux/action/types';
const INITAL_STATE = {
    Mobile: '',
    Password: '',
    loading: false,
    error: ''
}
export default (state = INITAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, Mobile: action.playload };
        case PASSWORD_CHANGED:
            return { ...state, Password: action.playload };
        case USER_LOGIN_ATTEMP:
            return { ...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...INITAL_STATE };
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, Password: '', error: 'رمز اشتباه است' };

// ...........................REGISTER................................................//
        case MOBAIL_REGISTER_CHENGED:
            return { ...state, Mobile: action.playload };
        case PASSWORD_REGISTER_CHANGED:
            return { ...state, Password: action.playload };
        case USER_REGISTER_ATTEMP:
            return { ...state, loading: true };
        case USER_REGISTER_SUCCESS:
            return { ...state, ...INITAL_STATE };

             default:
            return state;
    }
}

