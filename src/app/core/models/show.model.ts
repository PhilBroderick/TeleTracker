import { Season } from "./season.model";
export interface Show {
  id: string;
  title: string;
  seasons: Season[];
  overview: string;
  firstAirDate: Date;
  posterPath: string;
  voteAverage: number;
  popularity: number;
}
