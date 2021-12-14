import React from 'react';
import moviecover from 'assets/images/movie-cover.png';

export const CardMovie = () => {
    return (
        <div className="card-main">
            <img src={moviecover} className="image" />
            <span className="titulo">
                Escape Room 2: Mueres por salir
            </span>
            <span className="genero">Terror</span>
            <div className="price">$50.00</div>
        </div>
    )
}
