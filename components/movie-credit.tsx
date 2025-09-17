import { fetchMovieCredits } from "../shared/api/movie";
import styles from "../styles/movie-credits.module.css";
import { MovieIdProps, MovieCredit } from "../types/movie";

export default async function MovieCredits({ id }: MovieIdProps) {
  const credits: MovieCredit[] = await fetchMovieCredits(id);
  return (
    <div className={styles.container}>
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            <img src={credit.profile_path} alt={credit.name} />
            <div>
              <span className={styles.character}>{credit.character}</span>
              <span className={styles.credit_label}>as</span>
              <span>{credit.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
