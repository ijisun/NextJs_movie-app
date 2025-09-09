import Link from "next/link";

export default function MovieDetailNav({ id }: { id: string }) {
  return (
    <nav>
      <ul>
        <li>
          <Link href={`/movies/${id}/info`}>Movie</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/videos`}>Videos</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/credits`}>Credits</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/providers`}>Providers</Link>
        </li>
        <li>
          <Link href={`/movies/${id}/similar`}>Similar</Link>
        </li>
      </ul>
    </nav>
  );
}
