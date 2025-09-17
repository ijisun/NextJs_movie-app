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

export async function fetchMovie(id: number): Promise<MovieDetail> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function fetchMovieVideos(id: number): Promise<MovieVideo[]> {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export async function fetchMovieCredits(id: number): Promise<MovieCredit[]> {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export async function fetchMovieProviders(id: number): Promise<MovieProviders> {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export async function fetchSimilarMovies(id: number): Promise<SimilarMovies[]> {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}
