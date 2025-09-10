import { fetchMovie } from "../../../../../shared/api/movie";
import { IParams } from "../../../../../types/movieId";
import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import styles from "../../../../../styles/loading.module.css";

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Info({ params }: IParams) {
  const { id } = await params;
  return (
    <>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading Movie info</h1>}
      >
        <MovieInfo id={id} />
      </Suspense>
    </>
  );
}
