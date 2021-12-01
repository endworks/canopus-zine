export interface BaseCinema {
  name: string;
  address?: string;
  location?: string;
  website?: string;
  source?: string;
}

export interface CinemaData {
  [id: string]: BaseCinema;
}

export interface Cinema extends BaseCinema {
  id: string;
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
  room: string;
  time: string;
  date?: string;
  type?: string;
  url?: string;
}

export interface CinemaDetails extends Cinema {
  lastUpdated: string;
  movies: Movie[];
}
