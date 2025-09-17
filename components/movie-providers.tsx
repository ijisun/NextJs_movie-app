import Link from "next/link";
import { fetchMovieProviders } from "../shared/api/movie";
import styles from "../styles/movie-providers.module.css";
import { MovieIdProps, MovieProviders as Providers } from "../types/movie";

export default async function MovieProviders({ id }: MovieIdProps) {
  const providers: Providers = await fetchMovieProviders(id);

  // 'KR'의 스트리밍 서비스 배열 가져오기
  const KR = providers.KR || null;

  if (!KR) {
    return (
      <div className={styles.no_result}>
        <p>No provider data available for Korea</p>
        <span>Please check back later.</span>
      </div>
    );
  }

  const flatrate = KR.flatrate || [];
  const buy = KR.buy || [];
  const rent = KR.rent || [];

  return (
    <div className={styles.container}>
      {flatrate.length > 0 && (
        <>
          <h3>Streaming</h3>
          <ul>
            {flatrate.map((item) => (
              <li key={item.provider_id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                  alt={item.provider_name}
                />
                <span>{item.provider_name}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {buy.length > 0 && (
        <>
          <h3>Buy</h3>
          <ul>
            {buy.map((item) => (
              <li key={item.provider_id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                  alt={item.provider_name}
                />
                <span>{item.provider_name}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {rent.length > 0 && (
        <>
          <h3>Rent</h3>
          <ul>
            {rent.map((item) => (
              <li key={item.provider_id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                  alt={item.provider_name}
                />
                <span>{item.provider_name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      <Link href={KR.link} target={"_blank"} className={styles.link}>
        Watch now
      </Link>
    </div>
  );
}
