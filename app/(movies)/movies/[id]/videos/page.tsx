import { Suspense } from "react";
import { IParams } from "../../../../../types/movie";
import MovieVideos from "../../../../../components/movie-videos";
import styles from "../../../../../styles/loading.module.css";

export default async function Videos({ params }: IParams) {
  const { id } = params;
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
