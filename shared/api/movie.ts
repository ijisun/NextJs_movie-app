import { API_URL } from "../../app/constants";

export async function fetchAllMovies() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function fetchMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function fetchMovieVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export async function fetchMovieCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export async function fetchMovieProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export async function fetchSimilarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}
