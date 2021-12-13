import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieCategoryList } from './movieCategorylist/MovieCategoryList'


export const CategoryMovieScreen = () => {

    const {categoryId} = useSearchParams()
    return (
        <>
        <MovieCategoryList
            categoryName={categoryId}
            esLista={false}
        />
        </>
    )
}
