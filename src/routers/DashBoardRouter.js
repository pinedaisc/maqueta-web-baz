import { Route, Routes } from "react-router";
import { Navbar } from "../components/ui/Navbar";
import { NotFound } from "../components/ui/NotFound";
import { HomeScreen } from "../components/home/HomeScreen";
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { MovieSynopsis } from "../components/movies/MovieSynopsisScreen";
import { Footer } from '../components/ui/Footer';
import { MisRentasScreen } from "components/movies/MisRentasScreen";
import { CategoryMovieScreen } from './../components/movies/CategoryMovieScreen';


export const DashBoardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="main-container container py-5">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/movies" element={<MoviesScreen />} />
                    <Route path="/detailMovie/:movieId" element={<MovieSynopsis />} />
                    <Route path="/categories/:categoryId" element={<CategoryMovieScreen />} />
                    <Route path="/rental/:sdfsdf" element={<MisRentasScreen />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />

        </>
    )
}
