export interface Cinema {
  name: string;
  address?: string;
  location?: string;
  website?: string;
  source?: string;
}

export interface Movie {
  id: string;
  name: string;
  sessions: Session[];
  synopsis?: string;
  duration?: number;
  director?: string;
  genres?: string[];
  actors?: string[];
  poster?: string;
  trailer?: string;
  source?: string;
}

export interface Session {
  time: string;
  room: string;
  type?: string;
  url?: string;
}

export interface CinemaData {
  [id: string]: Cinema;
}

export interface CinemaResponse extends Cinema {
  id: string;
}

export type CinemasResponse = Array<CinemaResponse>;

export interface CinemaMoviesResponse extends CinemaResponse {
  lastUpdated: string;
  movies: Movie[];
}
