import MovieDetailNav from "../../../../components/movie-nav";

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
