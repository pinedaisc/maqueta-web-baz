import React from 'react'
import {Navigate} from 'react-router-dom';

export const PublicRouter = ({children}) => {

    return children.props.isLogged ? <Navigate to="/"/> : children

}