import { Suspense } from "react";
import { fetchMovie } from "../../../../../shared/api/movie";
import { IParams } from "../../../../../types/movieId";
import styles from "../../../../../styles/loading.module.css";
import MovieSimilar from "../../../../../components/movie-similar";

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
