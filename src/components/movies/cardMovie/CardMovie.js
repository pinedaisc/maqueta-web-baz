import React from 'react';
import moviecover from 'assets/images/movie-cover.png';
import { NavLink } from 'react-router-dom';

export const  CardMovie = ({title='Escape Room 2: Mueres por salir' , category='Terror', price='50.00'}) => {
    return (
        <>
            <NavLink to="/detailMovie/sdfsdf">
                <div className="card-main">
                    <img src={moviecover} className="image" />
                    <span className="titulo">
                        {title}
                    </span>
                    <span className="genero">{category}</span>
                    <div className="price">${price}</div>
                </div>
            </NavLink>
        </>
    )
}
