import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import bazLogo from 'assets/images/baz_logo.png';
import Avatar from './Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from 'actions/auth';
import { NavLink, Navigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();


    const { pathname: location } = useLocation();

    const dispatch = useDispatch();

    const navigateToHome = () => navigate('/');

    const logout = () => {
        navigate('/login')
    }

    return (
        <navbar className="main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="logo" onClick={navigateToHome}></div>
                    </div>
                    <div className="col">
                        <NavLink to="/">
                            <button className={`btn btn-navbar p-2 ${location === "/" ? 'border-bottom border-baz-purple' : ''}`}>
                                <h6>Home</h6>
                            </button>
                        </NavLink>
                        <NavLink to="/movies">

                            <button className={` btn btn-navbar p-2 ${location === "/movies" ? 'border-bottom border-baz-purple' : ''}`}>
                                <h6>Movies</h6>
                            </button>
                        </NavLink>
                    </div>
                    <div className="col border-left px-3 d-flex justify-content-center align-items-center">
                            <div className="profile">
                                <Avatar
                                    url="https://hipertextual.com/wp-content/uploads/2020/09/hipertextual-fortnite-rinde-homenaje-chadwick-boseman-con-impresionante-estatua-black-panther-2020149363.jpg"
                                />
                                <span><NavLink to="/rental/asdasd">Miguel Pineda </NavLink></span>
                            </div>

                            <div className="notifications"></div>
                            <button className="btn btn-navbar p-2 logout" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </navbar>
    )
}
