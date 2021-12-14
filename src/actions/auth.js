import { fetchConToken, fetchSinToken } from "helpers/fetch";
import { messages } from "helpers/messages";
import { types } from "types/types";

export const startChecking = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('auth/sessionVerify');
        const body = await resp.json();

        if (body.ok) {
            loginOk(body);

            dispatch(
                loginSucces({
                    uid: body.uid,
                    name: body.name
                })
            );

        } else {
            dispatch(loginFailed(body.msg));
        }
    }
}

export const startLogin = (user, password) => {
    return async (dispatch) => {
        try {

            dispatch(loginLoading());
            const resp = await fetchSinToken('auth/login', { user, password }, 'POST');
            const body = await resp.json();
            
            if (body.ok) {
                loginOk(body);
                dispatch(loginSucces({ uid: body.uid, name: body.name }));
            } else {
                dispatch(loginFailed(body.msg));
            }
        } catch (error) {
            dispatch(loginFailed(messages.errorMessage));
        }


    }
}

const loginLoading = () => ({
    type: types.authLoginLoading,
});

const loginSucces = (user) => ({
    type: types.authLoginSucces,
    payload: user
});

const loginFailed = (message) => ({
    type: types.authLoginFail,
    payload: message
});

export const startLogout = () => {
  return (dispatch)=>{
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');
    dispatch(logout())
  }
    
}

const logout =()=>({
    type: types.authLogout
})

const loginOk =(body)=>{
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());
}