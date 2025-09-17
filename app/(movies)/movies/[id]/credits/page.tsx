import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credit";
import styles from "../../../../../styles/loading.module.css";
import { IParams } from "../../../../../types/movie";

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
