import { fetchMovieVideos } from "../shared/api/movie";
import styles from "../styles/movie-videos.module.css";
import { MovieIdProps, MovieVideo } from "../types/movie";

export default async function MovieVideos({ id }: MovieIdProps) {
  const videos: MovieVideo[] = await fetchMovieVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
