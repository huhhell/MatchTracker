import {ITeam} from "./team.ts";
import {MatchStatus} from "./MatchStatus.ts";

export interface IMatch {
    time: string;
    title: string;
    homeTeam: ITeam;
    awayTeam: ITeam;
    homeScore: number;
    awayScore: number;
    status: MatchStatus;
}