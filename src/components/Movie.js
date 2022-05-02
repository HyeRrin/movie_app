import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/Movie.module.css";

function Movie({ id, coverImg, title, rating }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.card_movie}>
        <img src={coverImg} alt={title} />
        <h2>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h2>
        <div className={styles.box_layout}>
          <p className={styles.text_rating}>{rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
