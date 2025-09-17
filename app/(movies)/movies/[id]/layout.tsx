import { fetchMovie } from "../../../../shared/api/movie";
import { IParams } from "../../../../types/movie";
import MovieDetailNav from "../../../../components/movie-nav";

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await fetchMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <MovieDetailNav id={id} />
      {children}
    </div>
  );
}
