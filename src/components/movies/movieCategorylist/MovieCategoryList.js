import React from 'react'
import { CardMovie } from '../cardMovie/CardMovie'

export const MovieCategoryList = ({categoryName = 'Estrenos'}) => {
    return (
        <div className="category cat-estrenos">
            <header>
                <div className="title">{categoryName}</div>
                <a href="#" className="float-right link-category">Ver todo</a>
            </header>
            <div className="card-main-pagination">
                <CardMovie />
            </div>
        </div>

    )
}
