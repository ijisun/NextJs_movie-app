export default function MovieDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  return <h1>Movie {id}</h1>;
}
