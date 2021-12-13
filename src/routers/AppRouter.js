import { startChecking } from 'actions/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen"
import { DashBoardRouter } from "./DashBoardRouter";
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {

    const { logged, loading } = useSelector(state => state.auth);
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if(loading){
        return <h5>Espere...</h5>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRouter>
                            <LoginScreen isLogged={logged} />
                        </PublicRouter>

                    } />

                <Route
                    path="/*"
                    element={
                        <PrivateRouter>
                            <DashBoardRouter isLogged={logged} />
                        </PrivateRouter>
                    } />
            </Routes>
        </BrowserRouter>
    )
}
