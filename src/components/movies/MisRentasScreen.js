import React from 'react'
import { MovieCategoryList } from './movieCategorylist/MovieCategoryList';

export const MisRentasScreen = () => {
    return (
        <>
             <MovieCategoryList categoryName='Mis Rentas' esLista={false} />
        </>
    )
}
