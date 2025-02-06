import { useEffect, useState } from "react";
import MovieCard from "../components/moviecard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {


    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovie = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError("Fail to load movies...");
                console.log(error);
            } 
            finally {
                setLoading(false);
            }
        }

        loadPopularMovie();
        // console.log(movies);
    }, [])


    // const [movies, setMovies] = useState(null);
    // const [movieSearch, setMovieSearch] = useState(null);

    // useEffect(() => {
    //     const fetchMovie = async() => {
    //         try {
    //             const responseResult = await fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`);
    //             if(!responseResult.ok || !responseSearch.ok){
    //                 throw new Error("Network response was not ok!");
    //             }

    //             const data = await responseResult.json();
    //             setMovies(data);
    //         } catch (error) {
    //             console.log(error);
    //             setMovies(null);
    //         }
    //     }

    //     fetchMovie();

    //     // console.log(movies);
    // }, []);

    const handleSearch = async(e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);

        try {
            const searchResult = await searchMovies(searchQuery);
            console.log(searchResult);
            setMovies(searchResult);
            setError(null);
        } catch (error) {
            setError("Fail to search...");
            console.log(error);
        }finally{
            setLoading(false);
        }

        // setSearchQuery("");
        // const configSearch = encodeURIComponent(searchQuery);
        // const api = `https://ophim17.cc/_next/data/uVgvnGWsolD0jrmrHS1tA/tim-kiem.json?keyword=${configSearch}`;
        // console.log(configSearch);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search for movie..."
                    lassName="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {/* <button onClick={handleSearch}>click check</button> */}

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading...</div>) :
                (<div className="movies-grid">
                    {movies.items.map((movie) =>
                        // movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie._id} />)}
                </div>)}
            

            {/* {movies && movies.map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            ))} */}
        </div>
    )
}

export default Home