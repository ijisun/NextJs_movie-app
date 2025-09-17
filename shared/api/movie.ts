import { API_URL } from "../../app/constants";
import {
  MovieList,
  MovieDetail,
  MovieVideo,
  MovieCredit,
  SimilarMovies,
  MovieProviders,
} from "../../types/movie";

export async function fetchAllMovies(): Promise<MovieList[]> {
  const response = await fetch(API_URL);
  return response.json();
}

export async function fetchMovie(id: string): Promise<MovieDetail> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function fetchMovieVideos(id: string): Promise<MovieVideo[]> {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export async function fetchMovieCredits(id: string): Promise<MovieCredit[]> {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export async function fetchMovieProviders(id: string): Promise<MovieProviders> {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export async function fetchSimilarMovies(id: string): Promise<SimilarMovies[]> {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}
