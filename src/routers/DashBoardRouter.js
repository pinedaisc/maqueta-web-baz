import { Route, Routes } from "react-router";
import { Navbar } from "../components/ui/Navbar";
import { NotFound } from "../components/ui/NotFound";
import { HomeScreen } from "../components/home/HomeScreen";
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { Footer } from '../components/ui/Footer';

export const DashBoardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/movies" element={<MoviesScreen />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />

        </>
    )
}
