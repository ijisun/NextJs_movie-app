import { fetchSimilarMovies } from "../shared/api/movie";
import styles from "../styles/movie-similar.module.css";

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await fetchSimilarMovies(id);
  return (
    <div className={styles.container}>
      <ul>
        {similar.map((similar) => (
          <li key={similar.id}>
            <img src={similar.poster_path} alt={similar.title} />
            <div>
              <h3>{similar.title}</h3>
              <span>⭐️ {similar.vote_average.toFixed(1)}</span>
              <p>{similar.overview}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
