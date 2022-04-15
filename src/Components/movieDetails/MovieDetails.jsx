import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom";
import Rating from "../../Rating";

const MovieDetails = ({ moviesList }) => {
  const params = useParams();
  let movie = moviesList.find((film) => film.idItem === +params.idItem);
  console.log(moviesList);
  const navigate = useNavigate();

  const styling = {
    display: "flex",
    flexDirection: "columns",
  };
  return (
    <div className="movieDetails" style={styling}>
      <div>
        <img src={movie.posterURL} alt={movie.title} />
        <div>
          <button onClick={() => navigate(-1)}>
            <i class="fa-solid fa-caret-left"></i> GO BACK
          </button>
          <Rating rateNbr={movie.rating} />
        </div>
      </div>
      <div>
        <h1>
          {movie.title} <span>released</span> {movie.year}
        </h1>
        <p>{movie.description}</p>
        {/* <iframe href={trailerURL}</iframe> */}
      </div>
    </div>
  );
};

export default MovieDetails;
