import { Suspense } from "react";
import { IParams } from "../../../../../types/movieId";
import MovieInfo from "../../../../../components/movie-info";
import styles from "../../../../../styles/loading.module.css";

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
