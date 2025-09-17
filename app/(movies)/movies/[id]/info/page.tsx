import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import styles from "../../../../../styles/loading.module.css";

export default async function Info({ params }: { params: { id: number } }) {
  const { id } = params;
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
