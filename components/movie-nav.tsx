"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/movie-nav.module.css";

export default function MovieDetailNav({ id }: { id: number }) {
  const path = usePathname();
  const nav_url = {
    movie_info: `/movies/${id}/info`,
    movie_videos: `/movies/${id}/videos`,
    movie_credits: `/movies/${id}/credits`,
    movie_providers: `/movies/${id}/providers`,
    movie_similar: `/movies/${id}/similar`,
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path === nav_url.movie_info ? styles.active : ""}>
          <Link href={nav_url.movie_info}>Movie</Link>
        </li>
        <li className={path === nav_url.movie_videos ? styles.active : ""}>
          <Link href={nav_url.movie_videos}>Videos</Link>
        </li>
        <li className={path === nav_url.movie_credits ? styles.active : ""}>
          <Link href={nav_url.movie_credits}>Credits</Link>
        </li>
        <li className={path === nav_url.movie_providers ? styles.active : ""}>
          <Link href={nav_url.movie_providers}>Providers</Link>
        </li>
        <li className={path === nav_url.movie_similar ? styles.active : ""}>
          <Link href={nav_url.movie_similar}>Similar</Link>
        </li>
      </ul>
    </nav>
  );
}
