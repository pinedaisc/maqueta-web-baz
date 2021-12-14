import React from 'react'
import { SearchBar } from './../searchBar/SearchBar';
import { MovieCategoryList } from './movieCategorylist/MovieCategoryList';

export const MoviesScreen = () => {
    return (
        <div>
            <SearchBar />
            <MovieCategoryList/>
        </div>
    )
}
