import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img alt="poster" src={movie.poster_path !== 'N/A' ? 'https://www.themoviedb.org/t/p/w1280'+movie.poster_path : 'https://via.placeholder.com/400'}  />
            </div>
            <div>
                <span>{movie.average_vote}</span>
                <h3>{movie.original_title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;