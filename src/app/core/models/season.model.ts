import { Episode } from "./episode.model";
export interface Season {
  seasonId: string;
  name: string;
  seasonNumber: string;
  episodeCount: string;
  episodeList: Episode[];
}
