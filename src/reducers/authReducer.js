import { types } from "../types/types";

const initialState ={
    user:null,
    logged:false,
    error:false,
    loading:false,
    message:''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLoginLoading:
            return {
                ...state,
                loading:true
            }
        case types.authLoginSucces:
            return {
                ...state,
                user:action.payload,
                logged: true,
                loading: false,
                error:false,
                message:''
            }
        case types.authLoginFail:
            return {
                ...state,
                user:null,
                logged: false,
                loading: false,
                error: true,
                message:action.payload
            }
        case types.authLogout:
            return {
                ...state,
                user:null,
                logged:false
            }
        default:
            return state;
    }
}