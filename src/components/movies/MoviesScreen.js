import { VideoPlayer } from 'components/videoPlayer/VideoPlayer';
import React from 'react'
import { SearchBar } from './../searchBar/SearchBar';
import { MovieCategoryList } from './movieCategorylist/MovieCategoryList';
import { Player } from './player/Player';


export const MoviesScreen = () => {
    return (
        <>
            <SearchBar />
            <h1>Películas</h1>
            <MovieCategoryList/>
            <MovieCategoryList categoryName='On Demand Kinds'/>
            <MovieCategoryList categoryName='Infantiles'/>
            <MovieCategoryList categoryName='Terror'/>
            <Player/>
        </>
    )
}
