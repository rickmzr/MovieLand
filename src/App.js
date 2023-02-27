import { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import './App.css';


const API_URL = 'http://www.omdbapi.com?apikey=4cd4f63d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('star wars');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div 
                    className="searchIcon"
                    onClick={() => searchMovies(searchTerm)}>
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                </div>
            </div>

            {movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;