import { Suspense } from "react";
import { IParams } from "../../../../../types/movieId";
import MovieCredits from "../../../../../components/movie-credit";
import styles from "../../../../../styles/loading.module.css";

export default async function Credits({ params }: IParams) {
  const { id } = await params;
  return (
    <>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading Movie Credits</h1>}
      >
        <MovieCredits id={id} />
      </Suspense>
    </>
  );
}
