import React from 'react';
import { VideoPlayer } from '../videoPlayer/VideoPlayer'; 
import { Sypnosis } from './movieSynopsis/Sypnosis'
import { MovieCategoryList } from './movieCategorylist/MovieCategoryList';

export const MovieSynopsis = () => {
    return (
        <div>
            <div class="resumen">
                <div class="holder">
                    <VideoPlayer />
                    <Sypnosis />
                </div>
                <MovieCategoryList />
            </div>  
        </div>
        
    )
}
