import { fetchMovie } from "../shared/api/movie";
import styles from "../styles/movie-info.module.css";
import { MovieIdProps, MovieDetail } from "../types/movie";

export default async function MovieInfo({ id }: MovieIdProps) {
  const movie: MovieDetail = await fetchMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"} className={styles.link}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
