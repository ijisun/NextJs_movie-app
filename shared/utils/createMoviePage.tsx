import { Suspense } from "react";
import { IParams } from "../../types/movie";
import styles from "../../styles/loading.module.css";

export default function createMoviePage(
  Component: React.ComponentType<{ id: string }>,
  loadingMessage: string
) {
  return async function MoviePage({ params }: IParams) {
    const { id } = await params;
    return (
      <Suspense fallback={<h1 className={styles.loading}>{loadingMessage}</h1>}>
        <Component id={id} />
      </Suspense>
    );
  };
}
