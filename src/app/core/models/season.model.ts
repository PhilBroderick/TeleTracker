import { Episode } from "./episode.model";
export interface Season {
  seasonId: string;
  name: string;
  episodeCount: string;
  episodeList: Episode[];
}
