import { fetchAllMovies } from "../../shared/api/movie";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { MovieList } from "../../types/movie";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies: MovieList[] = await fetchAllMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
