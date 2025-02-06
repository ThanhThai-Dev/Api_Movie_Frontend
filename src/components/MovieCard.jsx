import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { FaRegFaceGrinHearts } from "react-icons/fa6";

function MovieCard ({movie}) {

    const {favorites, isFavorite, addToFavorites, removeFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault();
        if(favorite) removeFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/> */}
            <img src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`} alt={movie.name}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
                    <FaRegFaceGrinHearts />
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.name}</h3>
            {/* <p>{movie.release_date?.split("-")[0]}</p> */}
            <p>{movie.year}</p>
        </div>
    </div>
    // return <div className="movie-card">
    //     <div className="movie-poster">
    //         {/* <img src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`} alt={movie.name}/> */}
    //         <div className="movie-overlay">
    //             <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
    //                 <FaRegFaceGrinHearts />
    //             </button>
    //         </div>
    //     </div>
    //     <div className="movie-info">
    //         <h3>{movie.name}</h3>
    //         <p>{movie.year}</p>
    //     </div>
    //     </div>
}

export default MovieCard;