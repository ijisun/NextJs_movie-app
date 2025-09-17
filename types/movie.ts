export interface IParams {
  params: { id: number };
}

export interface MovieIdProps {
  id: number;
}

export interface MovieDefault {
  title: string;
  poster_path: string;
}

export interface MovieList extends MovieDefault {
  id: number;
}

export interface MovieDetail extends MovieDefault {
  vote_average: number;
  overview: string;
  homepage: string;
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
}

export interface MovieCredit {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export type SimilarMovies = Omit<MovieDetail, "homepage"> & { id: number };

export interface MovieProviderItem {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export interface MovieProvidersKR {
  link: string;
  flatrate?: MovieProviderItem[];
  buy?: MovieProviderItem[];
  rent?: MovieProviderItem[];
}

export interface MovieProviders {
  KR?: MovieProvidersKR;
}
