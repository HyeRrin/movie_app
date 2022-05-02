import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../routes/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.loading_main}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.main}>
          <h1 className={styles.title_movie}>{movie.title}</h1>
          <div className={styles.list_info}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <dl>
              <div className={styles.info_layout}>
                <dt>개봉</dt>
                <dd>{movie.year}년</dd>
              </div>
              <div className={styles.info_layout}>
                <dt>시간</dt>
                <dd>
                  {Math.floor(movie.runtime / 60)}시간 {movie.runtime % 60}분
                </dd>
              </div>
              <div className={styles.info_layout}>
                <dt>평점</dt>
                <dd className={styles.text_rating}>{movie.rating}</dd>
              </div>
              <div className={styles.info_layout}>
                <dt>장르</dt>
                <dd>
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <button onClick={() => window.open(`${movie.url}`, "_blank")}>
            다운로드 페이지
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
