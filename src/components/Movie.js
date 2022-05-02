import React from "react";
import { Link } from "react-router-dom";

function Movie({ id, url, coverImg, title, year, rating }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Movie;
