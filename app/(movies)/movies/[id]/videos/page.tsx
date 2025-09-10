import { Suspense } from "react";
import { fetchMovie } from "../../../../../shared/api/movie";
import { IParams } from "../../../../../types/movieId";
import MovieVideos from "../../../../../components/movie-videos";
import styles from "../../../../../styles/loading.module.css";

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return {
    title: movie.title,
  };
}

export default async function Videos({ params }: IParams) {
  const { id } = await params;
  return (
    <>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading Movie Videos</h1>}
      >
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
