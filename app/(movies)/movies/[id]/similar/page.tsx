import { Suspense } from "react";
import { fetchMovie } from "../../../../../shared/api/movie";
import { IParams } from "../../../../../types/movieId";
import styles from "../../../../../styles/loading.module.css";
import MovieSimilar from "../../../../../components/movie-similar";

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Similar({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading Similar Movies</h1>}
      >
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}
