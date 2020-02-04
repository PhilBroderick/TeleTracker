import { Season } from "./season.model";
export interface Show {
  id: string;
  title: string;
  seasons: Season[];
}
