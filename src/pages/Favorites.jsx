import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";

function Favorites() {

    const {favorites} = useMovieContext();

    if(favorites){
        return<div className="favorites">
            <h2>Your favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) =>
                // movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div> 
    }


    return <div className="favorites-empty">
        <h2>No favorite Movies yet</h2>
        <p>Start adding your movie favorites</p>
    </div>
}

export default Favorites