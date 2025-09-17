import { Suspense } from "react";
import MovieSimilar from "../../../../../components/movie-similar";
import styles from "../../../../../styles/loading.module.css";

export default async function Similar({ params }: { params: { id: number } }) {
  const { id } = params;
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
