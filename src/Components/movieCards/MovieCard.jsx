import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import "./movieCard.css";

const MovieCard = ({
  id,
  deleteFunction,
  movieInfo: { idItem, title, posterURL, rating },
}) => {
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <h3 className="title">{title}</h3>
        <button onClick={() => deleteFunction(id)} className="btnX">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "2%",
        }}
        className="cardBottom"
      >
        <Link to={`/movie-details/${idItem}`}>
          <button className="btn-details">
            DETAILS <i class="fa-solid fa-play"></i>
          </button>
        </Link>
        <Rating rateNbr={rating} />
      </div>
    </div>
  );
};

export default MovieCard;
