import { Suspense } from "react";
import { IParams } from "../../../../../types/movie";
import MovieProviders from "../../../../../components/movie-providers";
import styles from "../../../../../styles/loading.module.css";

export default async function Providers({ params }: IParams) {
  const { id } = params;
  return (
    <div>
      <Suspense
        fallback={<h1 className={styles.loading}>Loading Movie Providers</h1>}
      >
        <MovieProviders id={id} />
      </Suspense>
    </div>
  );
}
