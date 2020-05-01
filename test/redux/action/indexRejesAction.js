
import { MOBAIL_REGISTER_CHENGED,PASSWORD_REGISTER_CHANGED,USER_REGISTER_ATTEMP,USER_REGISTER_SUCCESS}  from './types';  

export const mobailchanged = (text) => {
    return {
        type:MOBAIL_REGISTER_CHENGED,
        playload:text
    }
}
export const passwordchanged = (text) => {
    return {
        type:PASSWORD_REGISTER_CHANGED,
        playload:text
    }
}
export const registerUser = (Mobile,Password,navigation) => {
    return (dispatch) => {
        dispatch( {type:USER_REGISTER_ATTEMP })
        fetch('http://194.5.175.25:3000/api/v1/sabt',{
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
                rejesterUserSuccess(dispatch,navigation)

            }
            // else{
            //     loginUserFail(dispatch)
            // }
     
    
        })
        .catch((error)=> {console.error(error)});
       
      
        
    }
}

const rejesterUserSuccess =(dispatch,navigation)=>{
    dispatch({type:USER_REGISTER_SUCCESS});
    const navigationAction= navigation.navigate({  routeName:'login', params:{}});
    navigation.dispatch(navigationAction);
}
// const rejesterUserFail =(dispatch)=>{
//     dispatch({type:USER_LOGIN_FAIL});
    
// }

