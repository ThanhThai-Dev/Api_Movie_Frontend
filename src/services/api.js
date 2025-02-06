const API_KEY = "3f50b0b6599923a79c212e32b8f007dd";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
const API_SEARCH = "https://ophim17.cc/_next/data/uVgvnGWsolD0jrmrHS1tA";

export const getPopularMovies = async() => {
    // const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const response = await fetch(API_URL);
    const data = await response.json();
    // return data.results;
    return data;
};

export const searchMovies = async(query) => {
    // const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    // const newQ = query.toLowerCase().replace(/\s+/g, "-")
    // const response = await fetch(`${API_SEARCH}/${newQ}`);
    const response = await fetch(`${API_SEARCH}/tim-kiem.json?keyword=${encodeURIComponent(query)}`);
    const data = await response.json();
    // return data.results;
    return data;
};