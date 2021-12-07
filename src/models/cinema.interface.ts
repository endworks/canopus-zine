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
  durationReadable?: string;
  director?: Crew;
  genres?: string[];
  actors?: Actor[];
  poster?: string;
  trailer?: string;
  source?: string;
}

export interface MoviePro extends Movie {
  originalName: string;
  writers: Crew[];
  theMovieDbId?: string;
  imDbId?: string;
  tagline: string | null;
  budget: number;
  revenue: number;
  year: number;
  releaseDate: string;
  originalLanguage: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
}

export interface Session {
  room: string;
  time: string;
  date?: string;
  type?: string;
  url?: string;
}

export interface Crew {
  name: string;
  picture?: string;
}

export interface Actor extends Crew {
  character?: string;
}

export interface CinemaDetails extends Cinema {
  lastUpdated: string;
  movies: Movie[];
}

export interface CinemaDetailsPro extends Cinema {
  lastUpdated: string;
  movies: MoviePro[];
}
