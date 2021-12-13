import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react/swiper-react.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CardMovie } from '../cardMovie/CardMovie'
import { NavLink } from 'react-router-dom';


export const MovieCategoryList = ({categoryName = 'Estrenos', esLista = true}) => {
    
    if (esLista) {
        return (
            <div className="category">
                <header className="row">
                    <div className="col">
                        <h2 className="title">{categoryName}</h2>
                    </div>
                    <div className="col ">
                        <NavLink to="/categories/sdsdf"><a className="ver-todo" >Ver todo</a></NavLink>
                    </div>
                </header>
                <div className="row">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    type='bullets'
                    slidesPerView={6}
                    navigation
                    pagination={{ 
                        clickable: true,
                        el: '.swiper-pagination',
                        type: 'bullets'
                    
                    }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    <SwiperSlide> <CardMovie /> </SwiperSlide>
                    ...
                    </Swiper>
                </div>
            </div>
        )
        
    } else {
        return (
            <div className="category">
                <header className="row">
                    <div className="col">
                        <h2 className="title">{categoryName}</h2>
                    </div>
                </header>
                <div className="row">
                    <div className='d-flex align-content-start flex-wrap'>
                    <CardMovie /><CardMovie /><CardMovie />
                    <CardMovie /><CardMovie /><CardMovie />
                    <CardMovie /><CardMovie /><CardMovie />
                    <CardMovie /><CardMovie /><CardMovie />
                    </div>
                </div>
            </div>
        )
    }
}
