import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import bazLogo from 'assets/images/baz_logo.png';
import Avatar from './Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from 'actions/auth';
import { NavLink, Navigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const  name  = "Miguel"

    const navigateToLogin = () => navigate('/login');
    const navigateToHome = () => navigate('/');

    const logout = () => {
        navigateToLogin
    }

    return (
        <navbar class="main">
            <div class="logo" onClick={navigateToHome}></div>
            <NavLink to="/movies">
                <div className="row ms-5">
                    <div className="col-6">
                        <button className={`btn-navbar p-2 ${location === "/" ? 'border-bottom border-baz-purple' : ''}`}>
                            <h6>Movies</h6>
                        </button>
                    </div>
                </div>
            </NavLink>
            <div class="float-right">
                <div class="profile">
                    <Avatar
                        url="https://hipertextual.com/wp-content/uploads/2020/09/hipertextual-fortnite-rinde-homenaje-chadwick-boseman-con-impresionante-estatua-black-panther-2020149363.jpg"
                    />
                    <span>anon</span>
                </div>
                
                <div class="notifications"></div>
                <button className="btn btn-baz-purple ms-5" onClick={logout}>
                    Logout
                </button>
            </div>
        </navbar>
    )
}
