
import {  EMAIL_CHANGED ,PASSWORD_CHANGED ,USER_LOGIN_ATTEMP ,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL}  from '../../../test/redux/action/types';  

export const emailchanged = (text) => {
    return {
        type:EMAIL_CHANGED,
        playload:text
    }
}
export const passwordchanged = (text) => {
    return {
        type:PASSWORD_CHANGED,
        playload:text
    }
}
export const loginUser = (Mobile,Password,navigation) => {
    return (dispatch) => {
        dispatch( {type:USER_LOGIN_ATTEMP })
        fetch('http://194.5.175.25:3000/api/v1/login',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            
            },
            body:JSON.stringify({
                mobile:Mobile,
                password:Password,
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            if(responseJson.success === true )
            {
                loginUserSuccess(dispatch,navigation)

            }
            else{
                loginUserFail(dispatch)
            }
     
    
        })
        .catch((error)=> {console.error(error)});
       
      
        
    }
}

const loginUserSuccess =(dispatch,navigation)=>{
    dispatch({type:USER_LOGIN_SUCCESS});
    const navigationAction= navigation.navigate({  routeName:'Home', params:{}});
    navigation.dispatch(navigationAction);
}
const loginUserFail =(dispatch)=>{
    dispatch({type:USER_LOGIN_FAIL});
    
}

